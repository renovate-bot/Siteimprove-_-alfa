import { Callback } from "@siteimprove/alfa-callback";
import { Continuation } from "@siteimprove/alfa-continuation";
import { Either, Left, Right } from "@siteimprove/alfa-either";
import { Functor } from "@siteimprove/alfa-functor";
import { Iterable } from "@siteimprove/alfa-iterable";
import { List } from "@siteimprove/alfa-list";
import { Mapper } from "@siteimprove/alfa-mapper";
import { Monad } from "@siteimprove/alfa-monad";
import { Thunk } from "@siteimprove/alfa-thunk";

export abstract class Future<T> implements Monad<T>, Functor<T> {
  /**
   * @internal
   */
  public abstract step(): Either<Future<T>, Future<T>>;

  public then(callback: Callback<T>): void {
    let result = this.step();

    while (result.isLeft()) {
      result = result.get().step();
    }

    result.get().then(callback);
  }

  public isNow(): boolean {
    return this instanceof Now;
  }

  public isDeferred(): boolean {
    return this instanceof Defer || this instanceof Defer.Bind;
  }

  public isSuspended(): boolean {
    return this instanceof Suspend || this instanceof Suspend.Bind;
  }

  public map<U>(mapper: Mapper<T, U>): Future<U> {
    return this.flatMap(value => Now.of(mapper(value)));
  }

  public abstract flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U>;

  public toPromise(): Promise<T> {
    return new Promise(resolve => this.then(resolve));
  }
}

export namespace Future {
  export function isFuture<T>(value: unknown): value is Future<T> {
    return value instanceof Future;
  }

  export function now<T>(value: T): Future<T> {
    return Now.of(value);
  }

  export function defer<T>(continuation: Continuation<T>): Future<T> {
    return Defer.of(continuation);
  }

  export function suspend<T>(thunk: Thunk<Future<T>>): Future<T> {
    return Suspend.of(thunk);
  }

  export function delay<T>(thunk: Thunk<T>): Future<T> {
    return suspend(() => now(thunk()));
  }

  export function from<T>(promise: Promise<T>): Future<T> {
    return Future.defer(callback => promise.then(callback));
  }

  export function traverse<T, U>(
    values: Iterable<T>,
    mapper: Mapper<T, Future<U>>
  ): Future<Iterable<U>> {
    return Iterable.reduce(
      values,
      (values, value) =>
        mapper(value).flatMap(value =>
          values.map(values => values.push(value))
        ),
      Future.now(List.empty())
    );
  }

  export function sequence<T>(
    futures: Iterable<Future<T>>
  ): Future<Iterable<T>> {
    return traverse(futures, value => value);
  }
}

class Now<T> extends Future<T> {
  public static of<T>(value: T): Now<T> {
    return new Now(value);
  }

  private readonly _value: T;

  private constructor(value: T) {
    super();
    this._value = value;
  }

  public step(): Right<Future<T>> {
    return Right.of(this);
  }

  public then(callback: Callback<T>): void {
    callback(this._value);
  }

  public flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U> {
    return Suspend.of(() => mapper(this._value));
  }
}

class Defer<T> extends Future<T> {
  public static of<T>(continuation: Continuation<T>): Defer<T> {
    return new Defer(continuation);
  }

  private readonly _continuation: Continuation<T>;

  private constructor(continuation: Continuation<T>) {
    super();
    this._continuation = continuation;
  }

  public step(): Right<Future<T>> {
    return Right.of(this);
  }

  public then(callback: Callback<T>): void {
    this._continuation(callback);
  }

  public flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U> {
    return Defer.Bind.of(this._continuation, mapper);
  }
}

namespace Defer {
  export class Bind<S, T> extends Future<T> {
    public static of<S, T>(
      continuation: Continuation<S>,
      mapper: Mapper<S, Future<T>>
    ): Bind<S, T> {
      return new Bind(continuation, mapper);
    }

    private readonly _continuation: Continuation<S>;
    private readonly _mapper: Mapper<S, Future<T>>;

    private constructor(
      continuation: Continuation<S>,
      mapper: Mapper<S, Future<T>>
    ) {
      super();
      this._continuation = continuation;
      this._mapper = mapper;
    }

    public step(): Right<Future<T>> {
      return Right.of(this);
    }

    public then(callback: Callback<T>): void {
      this._continuation(value => this._mapper(value).then(callback));
    }

    public flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U> {
      return Suspend.of(() =>
        Bind.of(this._continuation, value =>
          this._mapper(value).flatMap(mapper)
        )
      );
    }
  }
}

class Suspend<T> extends Future<T> {
  public static of<T>(thunk: Thunk<Future<T>>): Suspend<T> {
    return new Suspend(thunk);
  }

  private readonly _thunk: Thunk<Future<T>>;

  private constructor(thunk: Thunk<Future<T>>) {
    super();
    this._thunk = thunk;
  }

  public step(): Left<Future<T>> {
    return Left.of(this._thunk());
  }

  public flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U> {
    return Suspend.Bind.of(this._thunk, mapper);
  }
}

namespace Suspend {
  export class Bind<S, T> extends Future<T> {
    public static of<S, T>(
      thunk: Thunk<Future<S>>,
      mapper: Mapper<S, Future<T>>
    ): Bind<S, T> {
      return new Bind(thunk, mapper);
    }

    private readonly _thunk: Thunk<Future<S>>;
    private readonly _mapper: Mapper<S, Future<T>>;

    private constructor(thunk: Thunk<Future<S>>, mapper: Mapper<S, Future<T>>) {
      super();
      this._thunk = thunk;
      this._mapper = mapper;
    }

    public step(): Either<Future<T>, Future<T>> {
      return this._thunk()
        .flatMap(this._mapper)
        .step();
    }

    public flatMap<U>(mapper: Mapper<T, Future<U>>): Future<U> {
      return Suspend.of(() =>
        Bind.of(this._thunk, value => this._mapper(value).flatMap(mapper))
      );
    }
  }
}
