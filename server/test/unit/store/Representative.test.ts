import Representative from "../../../src/domain/entity/store/Representative";

describe("Representative tests", function () {

    test("Should create a representative", function () {
        const representative = new Representative(
            "representative1", 
            "representative1@mail.com", 
            "(51) 98765-4321", 
            "address", 
            "store12345"
        );
        expect(representative.name).toBe("representative1");
        expect(representative.email).toBe("representative1@mail.com");
        expect(representative.phone).toBe("(51) 98765-4321");
        expect(representative.address).toBe("address");
        expect(representative.storeId).toBe("store12345");
    });
});
