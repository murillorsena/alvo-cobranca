import Name from "../../../src/domain/entity/user/Name";
import InvalidParamError from "../../../src/application/error/InvalidParamError";

describe("Name tests", () => {

    test("Should create a name", () => {
        const name = new Name("username");
        expect(name.value).toBe("username");
    });

    test("Should return an error if name is empty", () => {
        expect(() => new Name("")).toThrow(new InvalidParamError("name"));
    });

    test("Should return an error if name length is invalid", () => {
        expect(() => new Name("us")).toThrow(new InvalidParamError("name"));
    });
});
