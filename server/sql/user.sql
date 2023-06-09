DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE IF NOT EXISTS "user" (
	"id" UUID NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

INSERT INTO "user" ("id", "name", "email", "password") VALUES ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'user1', 'user1@mail.com', 'user1password');
INSERT INTO "user" ("id", "name", "email", "password") VALUES ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'user2', 'user2@mail.com', 'user2password');
