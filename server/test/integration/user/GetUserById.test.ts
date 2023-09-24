import User from "../../../src/domain/entity/user/UserOK";
import GetUserById from "../../../src/application/usecase/user/GetUserById";
import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";

describe("GetUserById tests", () => {

    test("Should return a user by id", async () => {
        const userRepository = new UserRepositoryInMemory();
        const userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        const salt = "fake-salt";
        userRepository.users.push(User.create(userData.name, userData.email, userData.password, salt, userData.id));
        const getUserById = new GetUserById(userRepository);
        const input = {
            id: userData.id
        }
        const user = await getUserById.execute(input);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should return an error if user is not found by id", () => {
        const userRepository = new UserRepositoryInMemory();
        const getUserById = new GetUserById(userRepository);
        const input = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb"
        };
        expect(() => getUserById.execute(input)).rejects.toThrow(new Error("User not found"));
    });
    
    test("Should check if UserRepository.findById was called", async () => {
        const userRepository = new UserRepositoryInMemory();
        const userRepositorySpy = jest.spyOn(userRepository, "findById");
        const userData = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        const salt = "fake-salt";
        userRepository.users.push(User.create(userData.name, userData.email, userData.password, salt, userData.id));
        const getUserById = new GetUserById(userRepository);
        const input = {
            id: userData.id
        };
        await getUserById.execute(input);
        expect(userRepositorySpy).toHaveBeenCalled();
        expect(userRepositorySpy).toHaveBeenCalledWith(input.id);
    });
});
