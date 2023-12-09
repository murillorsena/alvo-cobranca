import { Representative, RepresentativeProps } from "../../../src/domain/entity";
import { representativeDataMock } from "../../doubles";

describe("Representative unit tests.", () => {
    let representativeData: RepresentativeProps;

    beforeEach(() => {
        representativeData = Object.assign({}, representativeDataMock);
    });

    test("Should create a representative.", () => {
        const representative = Representative.create(representativeData);
        expect(representative.id).toBeDefined();
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.role).toBe(representativeData.role);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
    
    test("Should restore a database representative.", () => {
        const representative = Representative.restore(representativeData);
        expect(representative.id).toBe(representativeData.id);
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.role).toBe(representativeData.role);
        expect(representative.storeId).toBe(representativeData.storeId);
    });
});
