DROP TABLE IF EXISTS "document" CASCADE;

CREATE TABLE IF NOT EXISTS "document" (
	"id" UUID NOT NULL,
    "type" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);

INSERT INTO "document"
    ("type", "description")
VALUES
    ('DB', 'Reserva de Área'),
    ('DC', 'Encargo Condominial'),
    ('DD', 'Fundo de Promoção'),
    ('DE', 'Multa'),
    ('DF', 'Multa Rescisória'),
    ('DH', 'Aluguel Complementar'),
    ('DL', 'Aluguel Mínimo'),
    ('DT', 'Taxa de Cessão e Transferência'),
    ('DZ', 'Pagamento Manual'),
    ('NC', 'Nota Promissória de Condomínio'),
    ('NP', 'Nota Promissória de Aluguel'),
    ('ZP', 'Lançamento de Pagamento');
