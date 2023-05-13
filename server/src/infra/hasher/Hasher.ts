export default interface Hasher {
    encrypt (plaintext: string): Promise<string>;
    decrypt (plaintext: string, digest: string): Promise<boolean>;
}
