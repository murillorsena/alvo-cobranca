export interface AuthService {
    login (email: string, password: string): Promise<AuthServiceSession>;
}

export type AuthServiceSession = {
    userId: string,
    username: string,
    token: string
};
