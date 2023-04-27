import Password from "../../../src/domain/entity/user/Password";

describe("Password tests", () => {

    test("Should create a valid password", () => {
        const password = new Password("User1p@ssword");
        expect(password.value).toBe("User1p@ssword");
    });

    test("Should not accept a password with less than 8 characters", () => {
        expect(() => new Password("User1")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password longer than 20 characters", () => {
        expect(() => new Password("User1p@ssword23456789")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without lowercase letters", () => {
        expect(() => new Password("USER1P@SSWORD")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without uppercase letters", () => {
        expect(() => new Password("user1p@ssword")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without digits", () => {
        expect(() => new Password("Userp@ssword")).toThrow(new Error("Invalid password"));
    });

    test("Should not accept a password without special characters", () => {
        expect(() => new Password("User1password")).toThrow(new Error("Invalid password"));
    });
});
