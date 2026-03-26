import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_event_landing_program_items_tag" AS ENUM('scene', 'music', 'food');
  CREATE TYPE "public"."enum_event_landing_activities_items_category" AS ENUM('workshop', 'children', 'nature', 'music');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "event_landing_intro_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "event_landing_program_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"time" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"tag" "enum_event_landing_program_items_tag" DEFAULT 'scene' NOT NULL
  );
  
  CREATE TABLE "event_landing_activities_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" "enum_event_landing_activities_items_category" DEFAULT 'workshop' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "event_landing_food_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "event_landing_market_exhibitors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "event_landing_practical_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "event_landing" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title_line_one" varchar DEFAULT 'Kulturpunkt' NOT NULL,
  	"hero_title_line_two" varchar DEFAULT 'Nordmors' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Kunst · Kultur · Fællesskab' NOT NULL,
  	"hero_date" varchar DEFAULT '1. Maj
  2026' NOT NULL,
  	"hero_location" varchar DEFAULT 'Ejerslev Havn' NOT NULL,
  	"hero_time_badge" varchar DEFAULT 'KL. 10 – 17' NOT NULL,
  	"intro_lead" varchar DEFAULT 'En hel dag med' NOT NULL,
  	"intro_highlight" varchar DEFAULT 'kunst, musik, workshops, mad og fællesskab' NOT NULL,
  	"intro_body" varchar DEFAULT 'ved Ejerslev Havn — midt i Nordmors'' fantastiske molerlandskab. Oplev lokale kunstnere, syng med koret, lav pileflet, jag fossiler, og smag det bedste fra det nordmorsanske køkken.' NOT NULL,
  	"program_section_label" varchar DEFAULT 'Program' NOT NULL,
  	"program_section_title" varchar DEFAULT 'Scenen i Kulturteltet' NOT NULL,
  	"activities_section_label" varchar DEFAULT 'Workshops & Aktiviteter' NOT NULL,
  	"activities_section_title" varchar DEFAULT 'Noget for alle' NOT NULL,
  	"food_section_label" varchar DEFAULT 'Mad & Drikke' NOT NULL,
  	"food_section_title" varchar DEFAULT 'Smag Nordmors' NOT NULL,
  	"market_section_label" varchar DEFAULT 'Marked & Udstilling' NOT NULL,
  	"market_section_title" varchar DEFAULT 'Krea-Kræmmermarked' NOT NULL,
  	"practical_section_label" varchar DEFAULT 'Praktisk' NOT NULL,
  	"practical_section_title" varchar DEFAULT 'Godt at vide' NOT NULL,
  	"footer_title" varchar DEFAULT 'Kulturpunkt Nordmors' NOT NULL,
  	"footer_details" varchar DEFAULT '1. Maj 2026 · Ejerslev Havn · Kl. 10–17' NOT NULL,
  	"footer_note" varchar DEFAULT 'Kunst & Kultur fra Sundby i vest, Dråby i øst og Feggeklit i nord — langs Molerstriben' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_intro_stats" ADD CONSTRAINT "event_landing_intro_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_program_items" ADD CONSTRAINT "event_landing_program_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_activities_items" ADD CONSTRAINT "event_landing_activities_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_food_items" ADD CONSTRAINT "event_landing_food_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_market_exhibitors" ADD CONSTRAINT "event_landing_market_exhibitors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_landing_practical_items" ADD CONSTRAINT "event_landing_practical_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_landing"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "event_landing_intro_stats_order_idx" ON "event_landing_intro_stats" USING btree ("_order");
  CREATE INDEX "event_landing_intro_stats_parent_id_idx" ON "event_landing_intro_stats" USING btree ("_parent_id");
  CREATE INDEX "event_landing_program_items_order_idx" ON "event_landing_program_items" USING btree ("_order");
  CREATE INDEX "event_landing_program_items_parent_id_idx" ON "event_landing_program_items" USING btree ("_parent_id");
  CREATE INDEX "event_landing_activities_items_order_idx" ON "event_landing_activities_items" USING btree ("_order");
  CREATE INDEX "event_landing_activities_items_parent_id_idx" ON "event_landing_activities_items" USING btree ("_parent_id");
  CREATE INDEX "event_landing_food_items_order_idx" ON "event_landing_food_items" USING btree ("_order");
  CREATE INDEX "event_landing_food_items_parent_id_idx" ON "event_landing_food_items" USING btree ("_parent_id");
  CREATE INDEX "event_landing_market_exhibitors_order_idx" ON "event_landing_market_exhibitors" USING btree ("_order");
  CREATE INDEX "event_landing_market_exhibitors_parent_id_idx" ON "event_landing_market_exhibitors" USING btree ("_parent_id");
  CREATE INDEX "event_landing_practical_items_order_idx" ON "event_landing_practical_items" USING btree ("_order");
  CREATE INDEX "event_landing_practical_items_parent_id_idx" ON "event_landing_practical_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "event_landing_intro_stats" CASCADE;
  DROP TABLE "event_landing_program_items" CASCADE;
  DROP TABLE "event_landing_activities_items" CASCADE;
  DROP TABLE "event_landing_food_items" CASCADE;
  DROP TABLE "event_landing_market_exhibitors" CASCADE;
  DROP TABLE "event_landing_practical_items" CASCADE;
  DROP TABLE "event_landing" CASCADE;
  DROP TYPE "public"."enum_event_landing_program_items_tag";
  DROP TYPE "public"."enum_event_landing_activities_items_category";`)
}
