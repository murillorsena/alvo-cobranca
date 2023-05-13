import Password from "../../../src/domain/entity/user/Password";

describe("Password tests", () => {

    test("Should create a password", async () => {
        const password = await Password.create("User1p@ssword");
        expect(password.value).not.toBeNull();
    });

    test("Should create a password from the database", async () => {
        const password = new Password("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
        expect(password.value).toBe("87274a69118c5817ac97ce78b2db85b39880d6bca406569e475a916a8eb3b5d5e967f559a442c8295c760bafa2c8eae838ee6a194000919a30ba6748fae6af21");
    });

    test("Should not accept a password with less than 8 characters", async () => {
        expect(() => Password.create("User1")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password longer than 20 characters", () => {
        expect(() => Password.create("User1p@ssword23456789")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without lowercase letters", () => {
        expect(() => Password.create("USER1P@SSWORD")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without uppercase letters", () => {
        expect(() => Password.create("user1p@ssword")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without digits", () => {
        expect(() => Password.create("Userp@ssword")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without special characters", () => {
        expect(() => Password.create("User1password")).toThrow(new Error("Invalid password"));
    });
});
