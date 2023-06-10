DROP TABLE IF EXISTS "shopping" CASCADE;

CREATE TABLE IF NOT EXISTS "shopping" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', '8000', 'BSWA', 'BOURBON SHOPPING WALLIG');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('caadb02c-ff70-4073-89aa-b406b633d68d', '8001', 'BSAB', 'BOURBON SHOPPING ASSIS BRASIL');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('0d986235-5e8c-434e-a290-5fa65878a7ec', '8002', 'BSCA', 'BOURBON SHOPPING CANOAS');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', '8003', 'BSIP', 'BOURBON SHOPPING IPIRANGA');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('6a021ef2-ebca-4d3e-a8e1-443b5261cf22', '8004', 'BSCT', 'BOURBON SHOPPING COUNTRY');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('037cdc11-d767-4a8a-b15e-5eba194b3904', '8005', 'BSSL', 'BOURBON SHOPPING SÃO LEOPOLDO');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('f27d5dec-2b45-427e-96a7-859335c4c2ca', '8006', 'BSNH', 'BOURBON SHOPPING NOVO HAMBURGO');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('11e4e51c-dc76-4454-8c6a-4e4f8a14b806', '8007', 'BSSP', 'BOURBON SHOPPING SÃO PAULO');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('2475a51e-f0f8-4239-a32b-819be34ecd63', '8009', 'PACL', 'PORTO ALEGRE CENTERLAR');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('7cf491b2-1cd5-4bd6-a2fa-8a32194ff1d4', '8010', 'MOSH', 'MOINHOS SHOPPING');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('015c8fba-4d4e-4387-875a-f22ea82a7112', '8011', 'ZMHI', 'ZAFFARI MALL HÍPICA ');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('462b71bc-cd27-457d-918e-b4c092dd0fbc', '8012', 'BSPL', 'BOURBON SHOPPING SAN PELLEGRINO');
INSERT INTO "shopping" ("id", "code", "name", "description") VALUES ('1c2dc42d-011a-4bd7-97a9-6a9b2f769b94', '8013', 'BSTS', 'BOURBON SHOPPING TERESÓPOLIS');

SELECT * FROM "shopping";
