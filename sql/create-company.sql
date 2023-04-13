DROP TABLE IF EXISTS "shopping" CASCADE;

CREATE TABLE IF NOT EXISTS "shopping" (
    "id" SERIAL PRIMARY KEY
    "company" TEXT NOT NULL UNIQUE,
    "ue" TEXT NOT NULL,
    "edif" TEXT NOT NULL UNIQUE
);

INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8000", "UE0049", "BSWA");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8001", "UE0025", "BSAB");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8002", "UE0018", "BSCA");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8003", "UE0032", "BSIP");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8004", "UE0035", "BSCT");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8005", "UE0043", "BSSL");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8006", "UE0047", "BSNH");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8007", "UE0034", "BSSP");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8009", "UE0005", "PACL");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8010", "UE0001", "MOSH");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8011", "UE0051", "ZMHI");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8012", "UE0001", "BSPL");
INSERT INTO "shopping" ("company", "ue", "edif") VALUES ("8013", "UE0055", "BSTS");
