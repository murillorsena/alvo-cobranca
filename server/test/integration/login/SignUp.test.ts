import { UserProps } from "../../../src/domain/entity";
import { SignUp } from "../../../src/application/usecase";
import { UserAlreadyExistsError } from "../../../src/application/error";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { userDataMock } from "../../doubles";

describe("SignUp tests.", () => {
    let userData: UserProps;
    let userRepository: UserRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "UserRepository") return userRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        userData = Object.assign({}, userDataMock);
        userRepository = new UserRepositoryInMemory();
    });

    test("Should register a new user.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const input = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        const user = await signUp.execute(input);
        expect(user.id).toBeDefined();
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if the user already exists.", async () => {
        const signUp = new SignUp(repositoryFactoryMock);
        const input = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        await signUp.execute(input);
        expect(() => signUp.execute(input)).rejects.toThrow(new UserAlreadyExistsError());
    });

    test("Should check if userRepository.findByEmail was called.", async () => {
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
