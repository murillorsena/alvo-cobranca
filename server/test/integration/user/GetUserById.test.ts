import { User, UserProps } from "../../../src/domain/entity";
import { GetUserById } from "../../../src/application/usecase";
import { UserNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactoryInMemory } from "../../../src/infra/factory";

describe("GetUserById tests", () => {
    let userData: UserProps;

    beforeEach(() => {
        userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
    });

    test("Should return a user by id", async () => {
        const userRepository = new UserRepositoryInMemory();
        await userRepository.save(User.restore(userData));
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const getUserById = new GetUserById(repositoryFactory);
        const input = {
            id: userData.id
        }
        const user = await getUserById.execute(input);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by id", () => {
        const repositoryFactory = new RepositoryFactoryInMemory();
        const getUserById = new GetUserById(repositoryFactory);
        const input = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb"
        };
        expect(() => getUserById.execute(input)).rejects.toThrow(new UserNotFoundError());
    });
    
    test("Should check if UserRepository.findById was called", async () => {
        const userRepository = new UserRepositoryInMemory();
        await userRepository.save(User.restore(userData));
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const userRepositorySpy = jest.spyOn(userRepository, "findById");
        const getUserById = new GetUserById(repositoryFactory);
        const input = {
            id: userData.id
        };
        await getUserById.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.id);
    });
});
