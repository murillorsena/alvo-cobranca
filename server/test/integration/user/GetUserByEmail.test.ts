import { User, UserProps } from "../../../src/domain/entity";
import { GetUserByEmail } from "../../../src/application/usecase";
import { UserNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactoryInMemory } from "../../../src/infra/factory";

describe("GetUserByEmail tests", () => {
    let userData: UserProps;

    beforeEach(() => {
        userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
    });

    test("Should return a user by email", async () => {
        const userRepository = new UserRepositoryInMemory();
        await userRepository.save(User.restore(userData));
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const getUserByEmail = new GetUserByEmail(repositoryFactory);
        const input = {
            email: userData.email
        };
        const user = await getUserByEmail.execute(input);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by email", async () => {
        const repositoryFactory = new RepositoryFactoryInMemory();
        const getUserByEmail = new GetUserByEmail(repositoryFactory);
        const input = {
            email: "user@mail.com"
        };
        expect(() => getUserByEmail.execute(input)).rejects.toThrow(new UserNotFoundError());
    });

    test("Should check if UserRepository.findByEmail was called", async () => {
        const userRepository = new UserRepositoryInMemory();
        await userRepository.save(User.restore(userData));
        const repositoryFactory = new RepositoryFactoryInMemory();
        jest.spyOn(repositoryFactory, "create").mockReturnValue(userRepository);
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const getUserByEmail = new GetUserByEmail(repositoryFactory);
        const input = {
            email: userData.email
        };
        await getUserByEmail.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.email);
    });
});
