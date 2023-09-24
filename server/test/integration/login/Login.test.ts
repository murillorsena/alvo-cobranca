import User from "../../../src/domain/entity/user/User";
import Login from "../../../src/application/usecase/login/Login";
import BadRequestError from "../../../src/application/error/BadRequestError";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory copy";
import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";
import JwtAdapter from "../../../src/infra/token-generator/JwtAdapter";

describe("Login unit tests", function () {
    const userData = {
        name: "",
        email: "",
        password: ""
    };

    test("Should login", async function () {
        const secret = "12345";
        const salt = "12";
        const repositoryFactory = new DatabaseRepositoryFactory();
        const tokenGenerator = new JwtAdapter(secret);

        const user = User.create(userData.name, userData.email, userData.password, salt);
        const userRepository = new UserRepositoryInMemory();
        userRepository.users.push(user);
        const login = new Login(repositoryFactory, tokenGenerator, salt);
        const input = {
            email: userData.email,
            password: userData.password
        };
        const output = await login.execute(input);
        expect(output.name).toBe(userData.name);
        expect(output.token).toBe("");
    });

    test("Should return an error if user not found by id", async function () {
        const secret = "12345";
        const salt = "12";
        const repositoryFactory = new DatabaseRepositoryFactory();
        const tokenGenerator = new JwtAdapter(secret);
        const login = new Login(repositoryFactory, tokenGenerator, salt);
        const input = {
            email: userData.email,
            password: userData.password
        };
        expect(() => login.execute(input)).rejects.toThrow(new BadRequestError("Authentication failure"));
    });
    
    test("Should return an error if password is incorrect", async function () {
        const secret = "12345";
        const salt = "12";
        const repositoryFactory = new DatabaseRepositoryFactory();
        const tokenGenerator = new JwtAdapter(secret);
        const user = User.create(userData.name, userData.email, userData.password, salt);
        const userRepository = new UserRepositoryInMemory();
        userRepository.users.push(user);
        const login = new Login(repositoryFactory, tokenGenerator, salt);
        const input = {
            email: userData.email,
            password: ""
        };
        expect(() => login.execute(input)).rejects.toThrow(new BadRequestError("Authentication failure"));
    });

    test("Should check if userRepository.findByEmail is called", async function () {
        const secret = "12345";
        const salt = "12";
        const repositoryFactory = new DatabaseRepositoryFactory();
        const tokenGenerator = new JwtAdapter(secret);
        const userRepository = new UserRepositoryInMemory();
    });

    test("Should check if tokenGenerator.generate is called", async function () {
        const secret = "12345";
        const salt = "12";
        const repositoryFactory = new DatabaseRepositoryFactory();
        const tokenGenerator = new JwtAdapter(secret);
        const tokenGeneratorSpy = jest.spyOn(tokenGenerator, "generate");
        const user = User.create(userData.email, userData.name, userData.password, salt);
        const userRepository = new UserRepositoryInMemory();
        userRepository.users.push(user);
        const login = new Login(repositoryFactory, tokenGenerator, salt);
        const input = {
            email: userData.email,
            password: userData.password
        };
        await login.execute(input);
        expect(tokenGeneratorSpy).toHaveBeenCalledTimes(1);
        expect(tokenGeneratorSpy).toHaveBeenCalledWith();
    });
});
