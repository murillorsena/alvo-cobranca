import User from "../../../src/domain/entity/user/User";

describe("User tests", () => {

    test("Should create a new user", async () => {
        const user = await User.create("user1", "user1@mail.com", "User1p@ssword");
        expect(user.name.value).toBe("user1");
        expect(user.email.value).toBe("user1@mail.com");
    });

    test("Should create a user from the database", async () => {
        const user = User.buildExistingUser("user1", "user1@mail.com", "d6d3d8853e99f8d3d18a1274ca4077dfebabcdeb139e28183a387c341b425136d508fcf6193d535b49eb484d89b1c6e4774aa234edb3e12da84cd33aeb32845d", "58f6b4d0-1487-4b5f-9347-cd0a183e64c1");
        expect(user.id.value).toBe("58f6b4d0-1487-4b5f-9347-cd0a183e64c1");
        expect(user.name.value).toBe("user1");
        expect(user.email.value).toBe("user1@mail.com");
    });

    test("Should not create a user with empty name", async () => {
        expect(() => User.create("", "user1@mail.com", "User1p@ssword")).rejects.toThrow(new Error("Invalid name"));
    });

    test("Should not create a user with empty email", () => {
        expect(() => User.create("user1", "", "User1p@ssword")).rejects.toThrow(new Error("Invalid email"));
    });

    test("Should not create a user with empty password", async () => {
        expect(() => User.create("user1", "user1@mail.com", "")).rejects.toThrow(new Error("Invalid password"));
    });
});
