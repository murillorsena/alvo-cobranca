DROP TABLE IF EXISTS "expense" CASCADE;

CREATE TABLE IF NOT EXISTS "expense" (
	"id" UUID NOT NULL,
    "shopping_id" UUID NOT NULL,
    "store_id" UUID NOT NULL,
    "user_id" UUID NOT NUll,
    "description" TEXT NOT NULL,
    "amount" NUMERIC NOT NULL,
    "due_date" DATE NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "expense"
    ("id", "shopping_id", "store_id", "user_id", "description", "amount", "due_date")
VALUES
    ('1ed608a4-071f-490a-8528-0a8f8962346a', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Aluguel Mínimo', 10000, '2023-04-05'),
    ('67ea5e1d-56ca-4d7a-988a-dd4f16800b00', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Encargo Condominial', 1500, '2023-04-10'),
    ('f2962096-9254-4627-b2a2-a38c5cc42fa4', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Aluguel Mínimo', 10000, '2023-05-05'),
    ('9012d900-1f9d-4e5d-80c0-2662b66d3764', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Encargo Condominial', 1500, '2023-05-10'),
    ('e644a508-3b19-4a2f-b360-d4c13781f90d', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Aluguel Mínimo', 10000, '2023-06-05'),
    ('627af9a8-cffe-4a50-bcf2-b00caa8bfb5b', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Encargo Condominial', 1500, '2023-06-10'),
    ('bf7ba4db-eeb4-4ec4-a1a5-521558b0fc0b', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Aluguel Mínimo', 10000, '2023-07-05'),
    ('39bedfc5-dea0-4f98-b6cd-4651144b1845', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b', 'Encargo Condominial', 1500, '2023-07-10'),
    ('64cee4e6-0bb4-403e-be05-791d16ddbb62', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac', 'Aluguel Mínimo', 2000, '2023-03-05'),
    ('c23834b9-37eb-4629-a55a-e401aa199908', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac', 'Encargo Condominial', 700, '2023-06-10'),
    ('0cbcfeb9-501f-4524-9cbd-32e4cfa72a03', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac', 'Aluguel Complementar', 200, '2023-06-15');

SELECT "id", "shopping_id", "store_id", "user_id", "description", "amount", "due_date"
FROM "expense";
