import { Email } from "../../../src/domain/entity/user/Email";
import { InvalidParamError } from "../../../src/application/error";

describe("Email tests", () => {

    test("Should create an email", () => {
        const email = Email.create("username@mail.com");
        expect(email.value).toBe("username@mail.com");
    });

    test("Should return an error if email is empty", () => {
        expect(() => Email.create("")).toThrow(new InvalidParamError("email"));
    });

    test("Should return an error if the email is invalid", () => {
        expect(() => Email.create("username@mail")).toThrow(new InvalidParamError("email"));
    });

    test("Should return an error if email length is invalid", () => {
        expect(() => Email.create("email")).toThrow(new InvalidParamError("email"));
    });
});
