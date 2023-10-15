import { User, UserProps } from "../../../src/domain/entity";
import { GetUserById } from "../../../src/application/usecase";
import { UserNotFoundError, RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("GetUserById tests", () => {
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
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        userRepository = new UserRepositoryInMemory();
    });

    test("Should return a user by id", async () => {
        userRepository.users.push(User.restore(userData));
        const getUserById = new GetUserById(repositoryFactoryMock);
        const getUserByIdInput = {
            id: userData.id
        }
        const user = await getUserById.execute(getUserByIdInput);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by id", () => {
        const getUserById = new GetUserById(repositoryFactoryMock);
        const getUserByIdInput = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb"
        };
        expect(() => getUserById.execute(getUserByIdInput)).rejects.toThrow(new UserNotFoundError());
    });
    
    test("Should check if repositoryFactory.create was called", async () => {
        userRepository.users.push(User.restore(userData));
        const repositoryFactorySpy = jest.spyOn(repositoryFactoryMock, "create");
        const getUserByIdInput = {
            id: userData.id
        };
        const getUserById = new GetUserById(repositoryFactoryMock);
        await getUserById.execute(getUserByIdInput);
        expect(repositoryFactorySpy).toHaveBeenCalledTimes(1);
        expect(repositoryFactorySpy).toHaveBeenCalledWith("UserRepository");
    });

    test("Should check if userRepository.findById was called", async () => {
        userRepository.users.push(User.restore(userData));
        const userRepositorySpy = jest.spyOn(userRepository, "findById");
        const getUserById = new GetUserById(repositoryFactoryMock);
        const getUserByIdInput = {
            id: userData.id
        };
        await getUserById.execute(getUserByIdInput);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(getUserByIdInput.id);
    });
});
