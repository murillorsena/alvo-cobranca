import UserRepositoryInMemory from "../../../src/infra/repository/user/UserRepositoryInMemory";
import GetUsers from "../../../src/application/usecase/user/GetUsers";

describe("GetUsers tests", () => {
    
    test("Should return a list of users", async () => {
        const userRepository = new UserRepositoryInMemory();
        const input = {
            id: "f2b31254-f4bb-48c5-ba64-e6393819ceeb",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };
        userRepository.users.push(input);
        const getUsers = new GetUsers(userRepository);
        const users = await getUsers.execute();
        expect(users).toHaveLength(1);
        expect(users[0].id).toBe(input.id);
        expect(users[0].name).toBe(input.name);
        expect(users[0].email).toBe(input.email);
    });

    test("Should return an empty list if there are no registered users", async () => {
        const userRepository = new UserRepositoryInMemory();
        const getUsers = new GetUsers(userRepository);
        const users = await getUsers.execute();
        expect(users).toHaveLength(0);
    });

    test("Should check if UserRepository.findAll was called", async function () {
        const userRepository = new UserRepositoryInMemory();
        const userRepositorySpy = jest.spyOn(userRepository, "findAll");
        const getUsers = new GetUsers(userRepository);
        await getUsers.execute();
        expect(userRepositorySpy).toHaveBeenCalled();
    });
});
