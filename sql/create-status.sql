DROP TABLE IF EXISTS "status" CASCADE;

CREATE TABLE IF NOT EXISTS "status" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL UNIQUE
);

INSERT INTO "status" ("description") VALUES ('Acordo Fechado');
INSERT INTO "status" ("description") VALUES ('Acordo Quebrado');
INSERT INTO "status" ("description") VALUES ('Aditivo Enviado e Aguardando Retorno');
INSERT INTO "status" ("description") VALUES ('Aguardando Pagamento');
INSERT INTO "status" ("description") VALUES ('Aguardando Retorno da Simulação');
INSERT INTO "status" ("description") VALUES ('Aguardando Confecção do Aditivo');
INSERT INTO "status" ("description") VALUES ('Aguardando Confecção do Contrato');
INSERT INTO "status" ("description") VALUES ('Contrato Enviado e Aguardando Retorno');
INSERT INTO "status" ("description") VALUES ('Contrato Recebido');
INSERT INTO "status" ("description") VALUES ('Em Negociação');
INSERT INTO "status" ("description") VALUES ('E-mail Automático');
INSERT INTO "status" ("description") VALUES ('Estabelecendo Contato');
INSERT INTO "status" ("description") VALUES ('Não Localizado');
INSERT INTO "status" ("description") VALUES ('Promessa de Pagamento');
INSERT INTO "status" ("description") VALUES ('Promessa de Pagamento \ DR');
INSERT INTO "status" ("description") VALUES ('Quebra de Programação');
INSERT INTO "status" ("description") VALUES ('Reunião Agendada');
INSERT INTO "status" ("description") VALUES ('Sem Contato');
INSERT INTO "status" ("description") VALUES ('Sem Interesse');
INSERT INTO "status" ("description") VALUES ('Sem Previsão de Pagamento');
