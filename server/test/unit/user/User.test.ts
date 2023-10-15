import { User, UserProps } from "../../../src/domain/entity";
import { InvalidParamError } from "../../../src/application/error";

describe("User unit tests", () => {
    let userData: UserProps;

    beforeEach (() => {
        userData = {
            id: "aea25255-fe13-4291-8c6a-8a9700362f19",
            name: "user1",
            email: "user1@mail.com",
            password: "User1p@ssword"
        };  
    });

    test("Should create a new user", async () => {
        const user = User.create(userData);
        expect(user.id).toBeDefined();
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
        expect(user.validadePassword(userData.password)).toBeTruthy();
    });

    test("Should create a user from the database", async () => {
        const user = User.restore(userData);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });

    test("Should not create a user with empty name", async () => {
        userData.name = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("name"));
    });

    test("Should not create a user with empty email", () => {
        userData.email = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("email"));
    });

    test("Should not create a user with empty password", async () => {
        userData.password = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("password"));
    });
});
