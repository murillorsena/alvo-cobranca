import User from "../../../src/domain/entity/user/UserOK";
import GetUserByEmail from "../../../src/application/usecase/user/GetUserByEmail";
import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";

describe("GetUserByEmail tests", () => {

    test("Should return a user by email", async () => {
        const userRepository = new UserRepositoryInMemory();
        const userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        const salt = "fake-salt";
        userRepository.users.push(User.create(userData.name, userData.email, userData.password, salt, userData.id));
        const getUserByEmail = new GetUserByEmail(userRepository);
        const input = {
            email: "user1@mail.com"
        };
        const user = await getUserByEmail.execute(input);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by email", async () => {
        const userRepository = new UserRepositoryInMemory();
        const getUserByEmail = new GetUserByEmail(userRepository);
        const input = {
            email: "user@mail.com"
        };
        expect(() => getUserByEmail.execute(input)).rejects.toThrow(new Error("User not found"));
    });

    test("Should check if UserRepository.findByEmail was called", async () => {
        const userRepository = new UserRepositoryInMemory();
        const userRepositorySpy = jest.spyOn(userRepository, "findByEmail");
        const userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        const salt = "fake-salt";
        userRepository.users.push(User.create(userData.name, userData.email, userData.password, salt, userData.id));
        const getUserByEmail = new GetUserByEmail(userRepository);
        const input = {
            email: "user1@mail.com"
        };
        await getUserByEmail.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.email);
    });
});
