import User from "../../src/domain/entity/user/User";

describe.skip('User tests', function () {
    const userData = {
        name: 'username',
        email: 'username@mail.com',
        password: 'userpassword'
    };

    test('Should create a user', function () {
        const { name, email, password } = userData;
        const user = new User(name, email, password);
        expect(user.name.value).toBe('username');
        expect(user.email.value).toBe('username@mail.com');
    });

    test('Should not create a user with empty name', function () {
        const invalidUser = function () {
            new User('', userData.email, userData.password);
        };
        expect(invalidUser).toThrow('Invalid name');
    });


    test('Should not create a user with empty email', function () {
        const invalidUser = function () {
            new User(userData.name, '', userData.password);
        };
        expect(invalidUser).toThrow('Invalid email');
    });

    test('Should not create a user with empty password', function () {
        const invalidUser = function () {
            new User(userData.name, userData.email, '');
        };
        expect(invalidUser).toThrow('Invalid password');
    });
});
