import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";
import GetUserByEmail from "../../../src/application/usecase/user/GetUserByEmail";

describe("GetUserByEmail tests", () => {

    test("Should return a user by email", async () => {
        const userRepository = new UserRepositoryInMemory();
        userRepository.users.push({
            name: "user",
            email: "user@mail.com",
            password: "password"
        });
        const getUserByEmail = new GetUserByEmail(userRepository);
        const input = {
            email: "user@mail.com"
        };
        const user = await getUserByEmail.execute(input);
        expect(user.name).toBe("user");
        expect(user.email).toBe("user@mail.com");
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
        const getUserByEmail = new GetUserByEmail(userRepository);
        const input = {
            email: "fake-user-email"
        };
        await getUserByEmail.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.email);
    });
});
