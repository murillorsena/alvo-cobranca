DROP TABLE IF EXISTS "expense" CASCADE;

CREATE TABLE IF NOT EXISTS "expense" (
	"id" UUID NOT NULL,
    "shopping_code" TEXT NOT NULL,
    "store_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" NUMERIC NOT NULL,
    "due_date" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('1ed608a4-071f-490a-8528-0a8f8962346a', '8000', '10001', 'Aluguel Mínimo', 10000, '2023-04-05'); 

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('67ea5e1d-56ca-4d7a-988a-dd4f16800b00', '8000', '10001', 'Encargo Condominial', 1500, '2023-04-10'); 

SELECT * FROM "expense";
