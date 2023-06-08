import Password from "../../../src/domain/entity/user/Password";
import InvalidParamError from "../../../src/application/error/InvalidParamError";

describe("Password tests", () => {

    test("Should create a password", async () => {
        const salt = "fake-salt";
        const password = Password.create("User1p@ssword", salt);
        expect(password.value).not.toBeNull();
    });

    test("Should create a password from the database", async () => {
        const password = Password.restore("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
        expect(password.value).toBe("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
    });

    test("Should not accept a password with less than 8 characters", async () => {
        expect(() => Password.create("User1", "fake-salt")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password longer than 20 characters", () => {
        expect(() => Password.create("User1p@ssword23456789", "fake-salt")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without lowercase letters", () => {
        expect(() => Password.create("USER1P@SSWORD", "fake-salt")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without uppercase letters", () => {
        expect(() => Password.create("user1p@ssword", "fake-salt")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without digits", () => {
        expect(() => Password.create("Userp@ssword", "fake-salt")).toThrow(new InvalidParamError("password"));
    });

    test("Should not accept a password without special characters", () => {
        expect(() => Password.create("User1password", "fake-salt")).toThrow(new InvalidParamError("password"));
    });
});
