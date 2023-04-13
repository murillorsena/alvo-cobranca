import Password from "../../src/domain/value-object/user/Password";

describe('Password tests', function () {
    test('Should not accept a password with less than 8 characters', function () {
        const invalidPassword = function () {
            new Password('user');
        };
        expect(invalidPassword).toThrow('Invalid password');
    });
});
