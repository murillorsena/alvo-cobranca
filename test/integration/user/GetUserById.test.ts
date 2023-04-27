import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";
import GetUserById from "../../../src/application/usecase/user/GetUserById";

describe("GetUserById tests", () => {

    test("Should return a user by id", async () => {
        const userRepository = new UserRepositoryInMemory();
        const input = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        userRepository.users.push(input);
        const getUserById = new GetUserById(userRepository);
        const user = await getUserById.execute({
            id: input.id
        });
        expect(user.id).toBe(input.id);
        expect(user.name).toBe(input.name);
        expect(user.email).toBe(input.email);
    });

    test("Should return an error if user is not found by id", () => {
        const userRepository = new UserRepositoryInMemory();
        const getUserById = new GetUserById(userRepository);
        const input = {
            id: "fake-user-id"
        };
        expect(() => getUserById.execute(input)).rejects.toThrow(new Error("User not found"));
    });
    
    test("Should check if UserRepository.findById was called", async () => {
        const userRepository = new UserRepositoryInMemory();
        const userRepositorySpy = jest.spyOn(userRepository, "findById");
        const getUserById = new GetUserById(userRepository);
        const input = {
            id: "fake-user-id"
        };
        await getUserById.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.id);
    });
});
