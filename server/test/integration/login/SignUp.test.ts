import { User, UserProps } from "../../../src/domain/entity";
import { SignUp } from "../../../src/application/usecase";
import { UserAlreadyExistsError } from "../../../src/application/error";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("SignUp tests", () => {
    let userData: UserProps;
    let userRepository: UserRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "UserRepository") return userRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        userData = {
            id: "",
            name: "user-name",
            email: "user@mail.com",
            password: "Userp@ssw0rd"
        };
        userRepository = new UserRepositoryInMemory();
    });

    test("Should register a new user", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const input = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        const user = await signUp.execute(input);
        expect(user.name).toBe(userData.name);
    });

    test("Should return an error if the user already exists", async () => {
        userRepository.users.push(User.create(userData))
        const signUp = new SignUp(repositoryFactoryMock);
        const input = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        expect(() => signUp.execute(input)).rejects.toThrow(new UserAlreadyExistsError());
    });

    test("Should check if userRepository.findByEmail was called", async () => {
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const signUp = new SignUp(repositoryFactoryMock);
        const input = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        await signUp.execute(input);
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
        expect(userRepositorySpy).toHaveBeenCalledWith(input.email);
    });
});
