export default interface TokenGenerator {
    generate (email: string, expiresIn: number): Promise<any>;
    verify (token: string): Promise<any>;
}
