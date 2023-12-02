import { CollectionAction } from "../../../domain/entity";
import { CollectionActionRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database";

export class CollectionActionRepositoryPostgre implements CollectionActionRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (collectionActionData: any): CollectionAction {
        const collectionActionProps = {
            id: collectionActionData.id,
            type: collectionActionData.type,
            title: collectionActionData.title,
            content: collectionActionData.content,
            createdAt: collectionActionData.created_at,
            updatedAt: collectionActionData.updated_at,
            storeId: collectionActionData.store_id,
            userId: collectionActionData.user_id
        };
        return CollectionAction.restore(collectionActionProps);
    }

    async save (collectionAction: CollectionAction): Promise<void> {
        const { id, type, title, content, createdAt, storeId, userId } = collectionAction;
        const statement = `
            INSERT INTO "collection_action" ("id", "type", "title", "content", "created_at", "updated_at", "store_id", "user_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `;
        const updatedAt = null;
        const params = [ id, type, title, content, createdAt, updatedAt, storeId, userId ];
        await this.connection.query(statement, params);
    }
    
    async update (collectionAction: CollectionAction): Promise<void> {
        const { id, type, title, content, updatedAt } = collectionAction;
        const statement = `
            UPDATE "collection_action"
            SET "type" = $1, "title" = $2, "content" = $3, "updated_at" = $4
            WHERE "id" = $5;
        `;
        const params = [ type, title, content, updatedAt, id ];
        await this.connection.query(statement, params);
    }

    async findAll (): Promise<CollectionAction[]> {
        const statement = `
            SELECT
                "collection_action"."id",
                "collection_action"."type",
                "collection_action"."title",
                "collection_action"."content",
                "user"."name" AS "username",
                "collection_action"."created_at",
                "collection_action"."updated_at",
                "collection_action"."store_id",
                "collection_action"."user_id"
            FROM "collection_action"
            JOIN "user"
            ON "collection_action"."user_id" = "user"."id";
        `;
        const collectionActionsData = await this.connection.query(statement, []);
        const collectionActions: CollectionAction[] = [];
        for (const collectionActionData of collectionActionsData) {
            const collectionAction = this.restore(collectionActionData);
            collectionActions.push(collectionAction);
        }
        return collectionActions;
    }

    async findById (id: string): Promise<CollectionAction | null> {
        const statement = `
            SELECT
                "collection_action"."id",
                "collection_action"."type",
                "collection_action"."title",
                "collection_action"."content",
                "user"."name" AS "username",
                "collection_action"."created_at",
                "collection_action"."updated_at",
                "collection_action"."store_id",
                "collection_action"."user_id"
            FROM "collection_action"
            JOIN "user"
            ON "collection_action"."user_id" = "user"."id"
            WHERE "collection_action"."id" = $1;
        `;
        const collectionActionData = await this.connection.query(statement, id);
        if (!collectionActionData) return null;
        const collectionAction = this.restore(collectionActionData);
        return collectionAction;
    }
    
    async findAllByStoreId (storeId: string): Promise<CollectionAction[]> {
        const statement = `
            SELECT
                "collection_action"."id",
                "collection_action"."type",
                "collection_action"."title",
                "collection_action"."content",
                "user"."name" AS "username",
                "collection_action"."created_at",
                "collection_action"."updated_at",
                "collection_action"."store_id",
                "collection_action"."user_id"
            FROM "collection_action"
            JOIN "user"
            ON "collection_action"."user_id" = "user"."id"
            WHERE "store_id" = $1;
        `;
        const collectionActionsData = await this.connection.query(statement, storeId);
        const collectionActions: CollectionAction[] = [];
        for (const collectionActionData of collectionActionsData) {
            const collectionAction = this.restore(collectionActionData);
            collectionActions.push(collectionAction);
        }
        return collectionActions;
    }
}
