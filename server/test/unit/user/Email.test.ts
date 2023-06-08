import Email from "../../../src/domain/entity/user/Email";
import InvalidParamError from "../../../src/application/error/InvalidParamError";

describe("Email tests", () => {

    test("Should create an email", () => {
        const email = new Email("username@mail.com");
        expect(email.value).toBe("username@mail.com");
    });

    test("Should return an error if email is empty", () => {
        expect(() => new Email("")).toThrow(new InvalidParamError("email"));
    });

    test("Should return an error if the email is invalid", () => {
        expect(() => new Email("username@mail")).toThrow(new InvalidParamError("email"));
    });

    test("Should return an error if email length is invalid", () => {
        expect(() => new Email("email")).toThrow(new InvalidParamError("email"));
    });
});
