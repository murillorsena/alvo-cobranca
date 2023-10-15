import { User, UserProps } from "../../../src/domain/entity";
import { GetUsers } from "../../../src/application/usecase";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactoryInMemory } from "../../../src/infra/factory";

describe("GetUsers tests", () => {
    let userData: UserProps;

    beforeEach(() => {
        userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
    });
    
    test("Should return a list of users", async () => {
        const userRepository = new UserRepositoryInMemory();
        await userRepository.save(User.create(userData));
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const getUsers = new GetUsers(repositoryFactory);
        const users = await getUsers.execute();
        expect(users).toHaveLength(1);
        expect(users[0].name).toBe(userData.name);
        expect(users[0].email).toBe(userData.email);
    });

    test("Should return an empty list if there are no registered users", async () => {
        const repositoryFactory = new RepositoryFactoryInMemory();
        const getUsers = new GetUsers(repositoryFactory);
        const users = await getUsers.execute();
        expect(users).toHaveLength(0);
    });

    test("Should check if UserRepository.findAll was called", async function () {
        const userRepository = new UserRepositoryInMemory();
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const userRepositorySpy = jest.spyOn(userRepository, "findAll");
        const getUsers = new GetUsers(repositoryFactory);
        await getUsers.execute();
        expect(userRepositorySpy).toHaveBeenCalled();
    });
});
