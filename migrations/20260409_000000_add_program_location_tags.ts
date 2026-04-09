import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" DROP DEFAULT;

    CREATE TYPE "public"."enum_event_landing_program_items_tag__new" AS ENUM(
      'scene',
      'music',
      'food',
      'kulturpladsen',
      'havnen'
    );

    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" TYPE "public"."enum_event_landing_program_items_tag__new"
      USING ("tag"::text::"public"."enum_event_landing_program_items_tag__new");

    DROP TYPE "public"."enum_event_landing_program_items_tag";

    ALTER TYPE "public"."enum_event_landing_program_items_tag__new"
      RENAME TO "enum_event_landing_program_items_tag";

    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" SET DEFAULT 'scene';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" DROP DEFAULT;

    UPDATE "event_landing_program_items"
    SET "tag" = 'scene'
    WHERE "tag"::text IN ('kulturpladsen', 'havnen');

    CREATE TYPE "public"."enum_event_landing_program_items_tag__old" AS ENUM(
      'scene',
      'music',
      'food'
    );

    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" TYPE "public"."enum_event_landing_program_items_tag__old"
      USING ("tag"::text::"public"."enum_event_landing_program_items_tag__old");

    DROP TYPE "public"."enum_event_landing_program_items_tag";

    ALTER TYPE "public"."enum_event_landing_program_items_tag__old"
      RENAME TO "enum_event_landing_program_items_tag";

    ALTER TABLE "event_landing_program_items"
      ALTER COLUMN "tag" SET DEFAULT 'scene';
  `)
}
