import { User, UserProps } from "../../../src/domain/entity";
import { InvalidParamError } from "../../../src/application/error";
import { userDataMock } from "../../doubles";

describe("User unit tests.", () => {
    let userData: UserProps;

    beforeEach(() => {
        userData = Object.assign({}, userDataMock);
    });

    test("Should create a new user.", () => {
        const user = User.create(userData);
        expect(user.id).toBeDefined();
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
        expect(user.validadePassword(userData.password)).toBeTruthy();
    });
    
    test("Should create a user from the database.", () => {
        const user = User.restore(userData);
        expect(user.id).toBe(userData.id);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });
    
    test("Should not create a user with empty name.", () => {
        userData.name = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("name"));
    });
    
    test("Should not create a user with empty email.", () => {
        userData.email = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("email"));
    });
    
    test("Should not create a user with empty password.", () => {
        userData.password = "";
        expect(() => User.create(userData)).toThrow(new InvalidParamError("password"));
    });
});
