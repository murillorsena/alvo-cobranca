import User from "../../../src/domain/entity/user/User";

describe("User tests", () => {

    test("Should create a user", () => {
        const user = new User("user1", "user1@mail.com", "User1p@ssword");
        expect(user.name.value).toBe("user1");
        expect(user.email.value).toBe("user1@mail.com");
        expect(user.password.value).toBe("User1p@ssword");
    });

    test("Should not create a user with empty name", () => {
        expect(() => new User("", "user1@mail.com", "User1p@ssword")).toThrow("Invalid name");
    });

    test("Should not create a user with empty email", () => {
        expect(() => new User("user1", "", "User1p@ssword")).toThrow("Invalid email");
    });

    test("Should not create a user with empty password", () => {
        expect(() => new User("user1", "user1@mail.com", "")).toThrow(new Error("Invalid password"));
    });
});
