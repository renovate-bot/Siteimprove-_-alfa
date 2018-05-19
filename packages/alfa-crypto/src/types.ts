export type Algorithm = "sha1" | "sha256" | "sha512";

export type Encoding = "utf8" | "hex" | "base64";

export type Bits = Array<number>;

export interface Hash {
  update(data: string | Bits): Hash;
  digest(): Bits;
  digest(encoding: Encoding): string;
}
