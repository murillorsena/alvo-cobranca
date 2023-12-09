import { User, Store, UserProps, StoreProps, ShoppingProps, CollectionActionProps } from "../../../src/domain/entity";
import { CreateCollectionAction } from "../../../src/application/usecase";
import { RepositoryNotFoundError, StoreNotFoundError, UserNotFoundError } from "../../../src/application/error";
import { UserRepositoryInMemory, StoreRepositoryInMemory, ShoppingRepositoryInMemory, CollectionActionRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { collectionActionDataMock, storeDataMock, userDataMock } from "../../doubles";

describe("CreateCollectionAction tests.", () => {
    let userData: UserProps;
    let storeData: StoreProps;
    let collectionActionData: CollectionActionProps;
    let userRepository: UserRepositoryInMemory;
    let storeRepository: StoreRepositoryInMemory;
    let collectionActionRepository: CollectionActionRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "UserRepository") return userRepository;
            if (repository === "StoreRepository") return storeRepository;
            if (repository === "CollectionActionRepository") return collectionActionRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        storeData = storeDataMock;
        userData = userDataMock;
        collectionActionData = collectionActionDataMock;
        userRepository = new UserRepositoryInMemory();
        storeRepository = new StoreRepositoryInMemory();
        collectionActionRepository = new CollectionActionRepositoryInMemory();
    });

    test("Should create a notification.", async () => {
        const user = User.restore(userData)
        const store = Store.restore(storeData)
        userRepository.users.push(user);
        storeRepository.stores.push(store);
        const collectionActionRepositorySpy = jest.spyOn(collectionActionRepository, "save");
        const createCollectioAction = new CreateCollectionAction(repositoryFactoryMock);
        const createCollectioActionInput = {
            id: collectionActionData.id,
            type: collectionActionData.type,
            content: collectionActionData.content,
            createdAt: collectionActionData.createdAt,
            updatedAt: collectionActionData.updatedAt,
            storeId: store.id,
            userId: user.id
        };
        const createCollectioActionOutput = await createCollectioAction.execute(createCollectioActionInput);
        expect(createCollectioActionOutput.id).toBeDefined();
        expect(createCollectioActionOutput.type).toBe(collectionActionData.type);
        expect(createCollectioActionOutput.content).toBe(collectionActionData.content);
        expect(createCollectioActionOutput.username).toBe(user.name);
        expect(createCollectioActionOutput.createdAt).toBeDefined();
        expect(createCollectioActionOutput.updatedAt).toBeNull();
    });

    test("Should return an error if the store is not found.", async () => {
        const user = User.restore(userData);
        const store = Store.restore(storeData);
        userRepository.users.push(user);
        const createCollectionAction = new CreateCollectionAction(repositoryFactoryMock);
        const createCollectionActionInput = {
            type: collectionActionData.type,
            content: collectionActionData.content,
            storeId: store.id,
            userId: user.id
        };
        expect(() => createCollectionAction.execute(createCollectionActionInput)).rejects.toThrow(new StoreNotFoundError());
    });

    test("Should return an error if the user is not found.", async () => {
        const user = User.restore(userData);
        const store = Store.restore(storeData);
        storeRepository.stores.push(store);
        const createCollectionAction = new CreateCollectionAction(repositoryFactoryMock);
        const createCollectionActionInput = {
            type: collectionActionData.type,
            content: collectionActionData.content,
            storeId: store.id,
            userId: user.id
        };
        expect(() => createCollectionAction.execute(createCollectionActionInput)).rejects.toThrow(new UserNotFoundError());
    });

    test("Should check if storeRepository.findById was called.", async () => {
        const user = User.restore(userData)
        const store = Store.restore(storeData)
        userRepository.users.push(user);
        storeRepository.stores.push(store);
        const storeRepositorySpy = jest.spyOn(storeRepository, "findById");
        const createCollectioAction = new CreateCollectionAction(repositoryFactoryMock);
        const createCollectioActionInput = {
            type: collectionActionData.type,
            content: collectionActionData.content,
            storeId: store.id,
            userId: user.id
        };
        await createCollectioAction.execute(createCollectioActionInput);
        expect(storeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(storeRepositorySpy).toHaveBeenCalledWith(createCollectioActionInput.storeId);
    });
    
    test("Should check if userRepository.findById was called.", async () => {
        const user = User.restore(userData)
        const store = Store.restore(storeData)
        userRepository.users.push(user);
        storeRepository.stores.push(store);
        const userRepositorySpy = jest.spyOn(userRepository, "findById");
        const createCollectioAction = new CreateCollectionAction(repositoryFactoryMock);
        const createCollectioActionInput = {
            type: collectionActionData.type,
            content: collectionActionData.content,
            storeId: store.id,
            userId: user.id
        };
        await createCollectioAction.execute(createCollectioActionInput);
        expect(userRepositorySpy).toHaveBeenCalledTimes(1);
        expect(userRepositorySpy).toHaveBeenCalledWith(createCollectioActionInput.userId);
    });
});
