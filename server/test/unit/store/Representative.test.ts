import { Representative, StoreProps, RepresentativeProps } from "../../../src/domain/entity";

describe("Representative unit tests", () => {
    let storeData: StoreProps;
    let representativeData: RepresentativeProps;

    beforeEach(() => {
        storeData = {
            id: "ae990c93-192c-4d8c-bc16-cf2dd93161cd",
            code: "10001",
            name: "LOJA 01"
        };
        representativeData = {
            id: "bf8f4a8f-d245-475f-9a3d-7f2768c3cff5",
            name: "representative1", 
            email: "representative1@mail.com", 
            phone: "(51) 98765-4321", 
            address: "address", 
            storeId: storeData.id
        };
    });
    

    test("Should create a representative", () => {
        const representative = Representative.create(representativeData);
        expect(representative.id).toBeDefined();
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
    
    test("Should restore a database representative", () => {
        const representative = Representative.restore(representativeData);
        expect(representative.id).toBe(representativeData.id);
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
});
