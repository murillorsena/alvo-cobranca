DROP TABLE IF EXISTS "store" CASCADE;

CREATE TABLE IF NOT EXISTS "store" (
	"id" UUID NOT NULL,
	"code" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

INSERT INTO "store" ("id", "code", "name") VALUES ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', '10000', 'LOJA 1');
INSERT INTO "store" ("id", "code", "name") VALUES ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', '10001', 'LOJA 2');

SELECT * FROM "store";
