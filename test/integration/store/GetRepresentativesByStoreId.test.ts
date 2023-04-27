import GetRepresentativesByStoreId from "../../../src/application/usecase/store/GetRepresentativesByStoreId";
import RepresentativeRepositoryInMemory from "../../../src/infra/repository/store/RepresentativeRepositoryInMemory";

describe("GetRepresentativesByStoreId tests", () => {

    test("Should list representatives by store id", async () => {
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const representative = {
            name: "representative1",
            email: "representative1@mail.com",
            phone: "(51) 98765-4321",
            address: "",
            storeId: "fake-store-id",
        };
        representativeRepository.representatives.push(representative);
        const getRepresentativesByStoreId = new GetRepresentativesByStoreId(representativeRepository);
        const input = {
            storeId: "fake-store-id"
        };
        const representatives = await getRepresentativesByStoreId.execute(input);
        expect(representatives).toHaveLength(1);
        expect(representatives[0].name).toBe(representative.name);
        expect(representatives[0].email).toBe(representative.email);
        expect(representatives[0].phone).toBe(representative.phone);
        expect(representatives[0].address).toBe(representative.address);
        expect(representatives[0].storeId).toBe(representative.storeId);
    });

    test("Should return a empty list if there no representatives", async () => {
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const getRepresentativesByStoreId = new GetRepresentativesByStoreId(representativeRepository);
        const input = {
            storeId: "fake-store-id"
        };
        const representatives = await getRepresentativesByStoreId.execute(input);
        expect(representatives).toHaveLength(0);
    });

    test("Should check if RepresentativeRepository.findByStoreId was called", async () => {
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreId");
        const getRepresentativesByStoreId = new GetRepresentativesByStoreId(representativeRepository);
        const input = {
            storeId: "fake-store-id"
        };
        await getRepresentativesByStoreId.execute(input);
        expect(representativeRepositorySpy).toHaveBeenCalled();
        expect(representativeRepositorySpy).toHaveBeenCalledWith(input.storeId);
    });
});
