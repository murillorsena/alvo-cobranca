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

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('e3888848-dd29-4c03-ab5c-0792e86898f8', '8000', '10001', 'Aluguel Complementar', 1000, '2023-04-15');

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('59efc7af-034e-4aaf-bb05-fb36e736e45b', '8001', '10002', 'Aluguel Mínimo', 5000, '2023-03-05');

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('af0a246e-190f-4b9a-b3a4-01edb9ad330e', '8001', '10002', 'Aluguel Mínimo', 1000, '2023-04-05');

INSERT INTO "expense" ("id", "shopping_code", "store_code", "description", "amount", "due_date")
VALUES ('05292bc9-2c0c-42a6-a03e-32475bb62601', '8001', '10002', 'Encargo Condominial', 800, '2023-04-10'); 

SELECT * FROM "expense";
