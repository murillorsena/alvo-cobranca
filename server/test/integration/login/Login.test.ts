import { UserProps } from "../../../src/domain/entity";
import { SignUp, Login, SignUpInput } from "../../../src/application/usecase";
import { RepositoryNotFoundError, AuthenticationFailureError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { JwtAdapter } from "../../../src/infra/token-generator";
import { userDataMock } from "../../doubles";

describe("Login tests.", function () {
    let userData: UserProps;
    let userRepository: UserRepositoryInMemory;
    let signUpInput: SignUpInput;
    let hashedPassword: string;
    let tokenGenerator: JwtAdapter;
    let secret: string;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "UserRepository") return userRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        userData = Object.assign({}, userDataMock);
        hashedPassword = "b94f1e3a1176a783751ef2fe1d14762ada8cc865b3634d08c77ee6a379dfa1f9f1147f7e86462063b7c068238d0c149b208a61a60edd8ae0f84cf481f109c4be";
        secret = "$2y$10$lmnsH9KPU/c.bSm1F/WBSOhQOd2sPWt3v8hKFFaDtSWukC727lw6";
        userRepository = new UserRepositoryInMemory();
        tokenGenerator = new JwtAdapter(secret);
        signUpInput = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
    });

    test("Should login a user.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const user = await signUp.execute(signUpInput);
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: userData.password
        };
        const output = await login.execute(loginInput);
        expect(output.userId).toBe(user.id);
        expect(output.userName).toBe(user.name);
        expect(output.token).toBeDefined();
    });

    test("Should return an error if the user is not found.", async () => {
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: userData.password
        };
        expect(() => login.execute(input)).rejects.toThrow(new AuthenticationFailureError(""));
    });
    
    test("Should return an error if the password is invalid.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const user = await signUp.execute(signUpInput);
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: ""
        };
        expect(() => login.execute(input)).rejects.toThrow(new AuthenticationFailureError(""));
    });

    test("Should check if userRepository.findByEmail is called.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const user = await signUp.execute(signUpInput);
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: userData.password
        };
        await login.execute(input);
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
        expect(userRepositorySpy).toHaveBeenCalledWith(input.email);
    });

    test("Should check if tokenGenerator.generate is called.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const user = await signUp.execute(signUpInput);
        const tokenGeneratorSpy = jest.spyOn(tokenGenerator, "generate");
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: userData.password
        };
        await login.execute(input);
        expect(tokenGeneratorSpy).toHaveBeenCalledTimes(1);
        expect(tokenGeneratorSpy).toHaveBeenCalledWith(input.email);
    });
});
