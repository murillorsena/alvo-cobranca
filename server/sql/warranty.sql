DROP TABLE IF EXISTS "warranty" CASCADE;

CREATE TABLE IF NOT EXISTS "warranty" (
	"id" UUID NOT NULL,
	"description" TEXT NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);

INSERT INTO "warranty" ("description") VALUES ('Fiador');
INSERT INTO "warranty" ("description") VALUES ('Carta Fiança');
INSERT INTO "warranty" ("description") VALUES ('Seguro Fiança');
INSERT INTO "warranty" ("description") VALUES ('Caução');
INSERT INTO "warranty" ("description") VALUES ('Benfeitoria\Equipamentos');
INSERT INTO "warranty" ("description") VALUES ('Sem Garantia');
INSERT INTO "warranty" ("description") VALUES ('Pagamento Antecipado');
INSERT INTO "warranty" ("description") VALUES ('Título de Capitalização');
INSERT INTO "warranty" ("description") VALUES ('Hipoteca');
INSERT INTO "warranty" ("description") VALUES ('CredPago');
