DROP TABLE IF EXISTS "store" CASCADE;

CREATE TABLE IF NOT EXISTS "store" (
	"id" UUID NOT NULL,
	"code" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

INSERT INTO "store" ("id", "code", "name") VALUES ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', '10001', 'LOJA 01');
INSERT INTO "store" ("id", "code", "name") VALUES ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', '10002', 'LOJA 02');
INSERT INTO "store" ("id", "code", "name") VALUES ('a321237a-d7fe-44be-b4f8-818f87cf7afc', '10003', 'LOJA 03');
INSERT INTO "store" ("id", "code", "name") VALUES ('548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '10004', 'LOJA 04');
INSERT INTO "store" ("id", "code", "name") VALUES ('ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '10005', 'LOJA 05');
INSERT INTO "store" ("id", "code", "name") VALUES ('215b9b53-3a62-4aaa-8e3a-45b627682918', '10006', 'LOJA 06');
INSERT INTO "store" ("id", "code", "name") VALUES ('28f15310-b087-4a25-98bf-06ae0e0abdeb', '10007', 'LOJA 07');
INSERT INTO "store" ("id", "code", "name") VALUES ('a8e69555-5eda-4832-aad5-a67f947dbe01', '10008', 'LOJA 08');
INSERT INTO "store" ("id", "code", "name") VALUES ('22464818-339e-49f3-b439-16838f7f2904', '10009', 'LOJA 09');
INSERT INTO "store" ("id", "code", "name") VALUES ('bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '10010', 'LOJA 10');

SELECT * FROM "store";
