import { Name } from "../../../src/domain/entity";
import { InvalidParamError } from "../../../src/application/error";

describe("Name tests.", () => {

    test("Should create a name.", () => {
        const name = Name.create("username");
        expect(name.value).toBe("username");
    });

    test("Should return an error if name is empty.", () => {
        expect(() => Name.create("")).toThrow(new InvalidParamError("name"));
    });

    test("Should return an error if name length is invalid.", () => {
        expect(() => Name.create("us")).toThrow(new InvalidParamError("name"));
    });
});
