import Email from "../../../src/domain/entity/user/Email";

describe("Email tests", () => {

    test("Should create an email", () => {
        const email = new Email("username@mail.com");
        expect(email.value).toBe("username@mail.com");
    });

    test("Should return an error if email is empty", () => {
        expect(() => new Email("")).toThrow(new Error("Invalid email"));
    });

    test("Should return an error if the email is invalid", () => {
        expect(() => new Email("username@mail")).toThrow(new Error("Invalid email"));
    });
});
