DROP TABLE IF EXISTS "warranty" CASCADE;

CREATE TABLE IF NOT EXISTS "warranty" (
	"id" UUID NOT NULL,
	"description" TEXT NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);

INSERT INTO "warranty"
	("description")
VALUES
	('Fiador'),
	('Carta Fiança'),
	('Seguro Fiança'),
	('Caução'),
	('Benfeitoria\Equipamentos'),
	('Sem Garantia'),
	('Pagamento Antecipado'),
	('Título de Capitalização'),
	('Hipoteca'),
	('CredPago');
