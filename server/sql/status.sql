DROP TABLE IF EXISTS "status" CASCADE;

CREATE TABLE IF NOT EXISTS "status" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);

INSERT INTO "status"
    ("description")
VALUES
    ('Acordo Fechado'),
    ('Acordo Quebrado'),
    ('Aditivo Enviado e Aguardando Retorno'),
    ('Aguardando Pagamento'),
    ('Aguardando Retorno da Simulação'),
    ('Aguardando Confecção do Aditivo'),
    ('Aguardando Confecção do Contrato'),
    ('Contrato Enviado e Aguardando Retorno'),
    ('Contrato Recebido'),
    ('Em Negociação'),
    ('E-mail Automático'),
    ('Estabelecendo Contato'),
    ('Não Localizado'),
    ('Promessa de Pagamento'),
    ('Promessa de Pagamento \ DR'),
    ('Quebra de Programação'),
    ('Reunião Agendada'),
    ('Sem Contato'),
    ('Sem Interesse'),
    ('Sem Previsão de Pagamento');
