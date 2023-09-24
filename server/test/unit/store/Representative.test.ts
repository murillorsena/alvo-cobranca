import Store from "../../../src/domain/entity/store/Store";
import Representative from "../../../src/domain/entity/store/Representative";

describe("Representative unit tests", function () {
    const store = Store.create("10001", "LOJA 01");
        const representativeData = {
            id: "bf8f4a8f-d245-475f-9a3d-7f2768c3cff5",
            name: "representative1", 
            email: "representative1@mail.com", 
            phone: "(51) 98765-4321", 
            address: "address", 
            storeId: store.id
        };

    test("Should create a representative", function () {
        const representative = Representative.create(
            representativeData.name,
            representativeData.email,
            representativeData.phone,
            representativeData.address,
            representativeData.storeId,
        );
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
    
    test("Should restore a database representative", function () {
        const representative = Representative.restore(
            representativeData.id,            
            representativeData.name,            
            representativeData.email,            
            representativeData.phone,            
            representativeData.address,            
            representativeData.storeId,            
        );
        expect(representative.id).toBe(representativeData.id);
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
});
