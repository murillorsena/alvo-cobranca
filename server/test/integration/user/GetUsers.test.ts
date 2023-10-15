import { User, UserProps } from "../../../src/domain/entity";
import { GetUsers } from "../../../src/application/usecase";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("GetUsers tests", () => {
    let userData: UserProps;
    let userRepository: UserRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repositoryName: string): Repository {
            if (repositoryName === "UserRepository") return userRepository;
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
    
    test("Should return a list of users", async () => {
        userRepository.users.push(User.restore(userData));
        const getUsers = new GetUsers(repositoryFactoryMock);
        const users = await getUsers.execute();
        const user = users[0];
        expect(users).toHaveLength(1);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an empty list if there are no registered users", async () => {
        const getUsers = new GetUsers(repositoryFactoryMock);
        const users = await getUsers.execute();
        expect(users).toHaveLength(0);
    });

    test("Should check if repositoryFactory.create was called", async () => {
        userRepository.users.push(User.restore(userData));
        const repositoryFactorySpy = jest.spyOn(repositoryFactoryMock, "create");
        const getUsers = new GetUsers(repositoryFactoryMock);
        await getUsers.execute();
        expect(repositoryFactorySpy).toHaveBeenCalledTimes(1);
        expect(repositoryFactorySpy).toHaveBeenCalledWith("UserRepository");
    });

    test("Should check if userRepository.findAll was called", async function () {
        userRepository.users.push(User.restore(userData));
        const userRepositorySpy = jest.spyOn(userRepository, "findAll");
        const getUsers = new GetUsers(repositoryFactoryMock);
        await getUsers.execute();
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
    });
});
