export default interface TokenGenerator {
    generate (email: string, expiresIn?: string | number): Promise<any>;
    verify (token: string): Promise<any>;
}
