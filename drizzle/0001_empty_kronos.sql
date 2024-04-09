CREATE TABLE IF NOT EXISTS "qoutes" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
