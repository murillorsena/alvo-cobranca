export interface AuthService {
    login (email: string, password: string): Promise<AuthServiceSession>;
}

export type AuthServiceSession = {
    name: string,
    token: string
};
