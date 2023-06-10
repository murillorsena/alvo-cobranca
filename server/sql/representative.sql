DROP TABLE IF EXISTS "representative" CASCADE;

CREATE TABLE IF NOT EXISTS "representative" (
	"id" UUID NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"store_code" TEXT NOT NULL,
	PRIMARY KEY ("id"),
	FOREIGN KEY ("store_code") REFERENCES "store" ("code")
);

INSERT INTO "representative" ("id", "name", "email", "phone", "address", "store_code") 
VALUES ('854bd477-49d8-457b-baaf-ae98ebd16edb', 'REPRESENTANTE 01', 'representative1@mail.com', '(51) 98765-4321', 'rua abc, 100', '10000');

INSERT INTO "representative" ("id", "name", "email", "phone", "address", "store_code") 
VALUES ('292d02ff-a14b-4bee-b811-13ef865e48cc', 'REPRESENTANTE 02', 'representative2@mail.com', '(51) 12345-6789', 'rua abc, 101', '10001');

SELECT * FROM "representative";
