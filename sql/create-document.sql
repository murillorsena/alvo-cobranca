DROP TABLE IF EXISTS "document" CASCADE;

CREATE TABLE IF NOT EXISTS "document" (
	"id" SERIAL PRIMARY KEY,
    "type" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL UNIQUE
);

INSERT INTO "document" ("type", "description") VALUES ('DB', 'Reserva de Área');
INSERT INTO "document" ("type", "description") VALUES ('DC', 'Encargos Condominiais');
INSERT INTO "document" ("type", "description") VALUES ('DD', 'Fundo de Promoção');
INSERT INTO "document" ("type", "description") VALUES ('DE', 'Multa');
INSERT INTO "document" ("type", "description") VALUES ('DF', 'Multa Rescisória');
INSERT INTO "document" ("type", "description") VALUES ('DH', 'Aluguel Complementar');
INSERT INTO "document" ("type", "description") VALUES ('DL', 'Aluguel Mínimo');
INSERT INTO "document" ("type", "description") VALUES ('DT', 'Cessão e Transferência');
INSERT INTO "document" ("type", "description") VALUES ('DZ', 'Pagamento Manual');
INSERT INTO "document" ("type", "description") VALUES ('NC', 'Nota Promissória de Condomínio');
INSERT INTO "document" ("type", "description") VALUES ('NP', 'Nota Promissória de Aluguel');
INSERT INTO "document" ("type", "description") VALUES ('ZP', 'Lançamento de Pagamento');
