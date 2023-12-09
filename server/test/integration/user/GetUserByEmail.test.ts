import { User, UserProps } from "../../../src/domain/entity";
import { GetUserByEmail } from "../../../src/application/usecase";
import { UserNotFoundError, RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { userDataMock } from "../../doubles";

describe("GetUserByEmail tests.", () => {
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

    test("Should return a user by email.", async () => {
        userRepository.users.push(User.restore(userData));
        const getUserByEmail = new GetUserByEmail(repositoryFactoryMock);
        const getUserByEmailInput = {
            email: userData.email
        };
        const user = await getUserByEmail.execute(getUserByEmailInput);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by email.", async () => {
        const getUserByEmail = new GetUserByEmail(repositoryFactoryMock);
        const getUserByEmailInput = {
            email: "user@mail.com"
        };
        expect(() => getUserByEmail.execute(getUserByEmailInput)).rejects.toThrow(new UserNotFoundError());
    });

    test("Should check if repositoryFactory.create waas called.", async () => {
        userRepository.users.push(User.restore(userData));
        const repositoryFactorySpy = jest.spyOn(repositoryFactoryMock, "create");
        const getUserByEmail = new GetUserByEmail(repositoryFactoryMock);
        const getUserByEmailInput = {
            email: userData.email
        };
        await getUserByEmail.execute(getUserByEmailInput);
        expect(repositoryFactorySpy).toHaveBeenCalledTimes(1);
        expect(repositoryFactorySpy).toHaveBeenCalledWith("UserRepository");
    });

    test("Should check if userRepository.findByEmail was called.", async () => {
        userRepository.users.push(User.restore(userData));
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const getUserByEmail = new GetUserByEmail(repositoryFactoryMock);
        const getUserByEmailInput = {
            email: userData.email
        };
        await getUserByEmail.execute(getUserByEmailInput);
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
        expect(userRepositorySpy).toHaveBeenCalledWith(getUserByEmailInput.email);
    });
});
