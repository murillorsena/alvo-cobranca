DROP TABLE IF EXISTS "store_shopping" CASCADE;

CREATE TABLE IF NOT EXISTS "store_shopping" (
	"store_id" UUID NOT NULL,
	"shopping_id" UUID NOT NULL
);

INSERT INTO "store_shopping"
	("store_id", "shopping_id")
VALUES
	('b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c'),
	('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d');

-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('a321237a-d7fe-44be-b4f8-818f87cf7afc', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('215b9b53-3a62-4aaa-8e3a-45b627682918', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('28f15310-b087-4a25-98bf-06ae0e0abdeb', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('a8e69555-5eda-4832-aad5-a67f947dbe01', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('22464818-339e-49f3-b439-16838f7f2904', '');
-- INSERT INTO "store_shopping" ("store_id", "shopping_id") VALUES ('bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '');

SELECT "store_id", "shopping_id"
FROM "store_shopping";
