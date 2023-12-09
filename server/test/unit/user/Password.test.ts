import { BcryptPassword, User } from "../../../src/domain/entity";
import { InvalidParamError } from "../../../src/application/error";

describe("Password tests", () => {

    test("Should create a password.", () => {
        const password = BcryptPassword.create("User1p@ssword");
        const user = User.create({
            name: "user",
            email: "user@mail.com",
            password: "User1p@ssword"
        });
        expect(user.validadePassword("User1p@ssword")).toBeTruthy();
        expect(password.value).not.toBeNull();
    });

    test("Should create a password from the database.", () => {
        const password = BcryptPassword.restore("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
        expect(password.value).toBe("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
    });

    test("Should not accept a password with less than 8 characters.", () => {
        expect(() => BcryptPassword.create("User1")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password longer than 20 characters.", () => {
        expect(() => BcryptPassword.create("User1p@ssword23456789")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without lowercase letters.", () => {
        expect(() => BcryptPassword.create("USER1P@SSWORD")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without uppercase letters.", () => {
        expect(() => BcryptPassword.create("user1p@ssword")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without digits.", () => {
        expect(() => BcryptPassword.create("Userp@ssword")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without special characters.", () => {
        expect(() => BcryptPassword.create("User1password")).toThrow(new InvalidParamError("password"));
    });
});
