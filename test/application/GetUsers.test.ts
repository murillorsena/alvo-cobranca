import GetUsers from "../../src/application/usecase/user/GetUsers";
import UserRepositoryInMemory from "../../src/infra/repository/UserRepositoryInMemory";

describe.skip('GetUser Tests', () => {
    test('Should return a list of users', async () => {
        const userRepository = new UserRepositoryInMemory();
        const user = {
            id: 'user1id',
            name: 'user1',
            email: 'user1@mail.com',
            password: 'user1password'
        };
        userRepository.users.push(user);
        const getUsers = new GetUsers(userRepository);
        const users = await getUsers.execute();
        expect(users).toHaveLength(1);
        expect(users[0].id).toBe(user.id);
        expect(users[0].name).toBe(user.name);
        expect(users[0].email).toBe(user.email);
        // expect(users[0].password).toBe(user.password);
    });

    test('Should return an empty list if there are no registered users', async () => {
        const userRepository = new UserRepositoryInMemory();
        const getUsers = new GetUsers(userRepository);
        const users = await getUsers.execute();
        expect(users).toHaveLength(0);
    });
});
