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
            name: "",
            email: "user@mail.com",
            password: "Userp@ssw0rd"
        };
        secret = "";
        userRepository = new UserRepositoryInMemory();
        tokenGenerator = new JwtAdapter(secret);
    });

    test("Should login", async function () {
        userRepository.users.push(User.restore(userData));
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: userData.password
        };
        const output = await login.execute(loginInput);
        expect(output.name).toBe(userData.name);
        expect(output.token).toBe("");
    });

    test("Should return an error if user is not found", async function () {
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: userData.password
        };
        expect(() => login.execute(loginInput)).rejects.toThrow(new UserNotFoundError());
    });
    
    test("Should return an error if password is invalid", async function () {
        userRepository.users.push(User.restore(userData));
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: ""
        };
        expect(() => login.execute(loginInput)).rejects.toThrow(new AuthenticationFailureError());
    });

    test("Should check if userRepository.findByEmail is called", async function () {
        userRepository.users.push(User.restore(userData));
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: userData.password
        };
        await login.execute(loginInput);
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
        expect(userRepositorySpy).toHaveBeenCalledWith(loginInput.email);
    });

    test("Should check if tokenGenerator.generate is called", async function () {
        console.log("user: ", User.restore(userData));
        console.log("userData: ", userData.password);
        userRepository.users.push(User.restore(userData));
        const tokenGeneratorSpy = jest.spyOn(tokenGenerator, "generate");
        const login = new Login(repositoryFactoryMock, tokenGenerator);
        const loginInput = {
            email: userData.email,
            password: userData.password
        };
        await login.execute(loginInput);
        expect(tokenGeneratorSpy).toHaveBeenCalledTimes(1);
        expect(tokenGeneratorSpy).toHaveBeenCalledWith(loginInput.email);
    });
});
