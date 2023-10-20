import { User, UserProps } from "../../../src/domain/entity";
import { Login } from "../../../src/application/usecase";
import { UserNotFoundError, RepositoryNotFoundError, AuthenticationFailureError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { JwtAdapter } from "../../../src/infra/token-generator";

describe("Login tests", function () {
    let userData: UserProps;
    let userRepository: UserRepositoryInMemory;
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
        userData = {
            id: "",
            name: "name",
            email: "user@mail.com",
            password: "Userp@ssw0rd"
        };
        hashedPassword = "b94f1e3a1176a783751ef2fe1d14762ada8cc865b3634d08c77ee6a379dfa1f9f1147f7e86462063b7c068238d0c149b208a61a60edd8ae0f84cf481f109c4be";
        secret = "$2y$10$lmnsH9KPU/c.bSm1F/WBSOhQOd2sPWt3v8hKFFaDtSWukC727lw6";
        userRepository = new UserRepositoryInMemory();
        tokenGenerator = new JwtAdapter(secret);
    });

    test("Should login a user", async function () {
        userRepository.users.push(User.create(userData));
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: userData.password
        };
        const output = await login.execute(input);
        expect(output.name).toBe(userData.name);
        expect(output.token).toBeDefined();
    });

    test("Should return an error if the user is not found", async function () {
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: userData.password
        };
        expect(() => login.execute(input)).rejects.toThrow(new UserNotFoundError());
    });
    
    test("Should return an error if the password is invalid", async function () {
        userRepository.users.push(User.create(userData));
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const input = {
            email: userData.email,
            password: ""
        };
        expect(() => login.execute(input)).rejects.toThrow(new AuthenticationFailureError());
    });

    test("Should check if userRepository.findByEmail is called", async function () {
        userRepository.users.push(User.create(userData));
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

    test("Should check if tokenGenerator.generate is called", async function () {
        userRepository.users.push(User.create(userData));
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
