import * as migration_20260326_170702_init from './20260326_170702_init';
import * as migration_20260409_000000_add_program_location_tags from './20260409_000000_add_program_location_tags';

export const migrations = [
  {
    up: migration_20260326_170702_init.up,
    down: migration_20260326_170702_init.down,
    name: '20260326_170702_init'
  },
  {
    up: migration_20260409_000000_add_program_location_tags.up,
    down: migration_20260409_000000_add_program_location_tags.down,
    name: '20260409_000000_add_program_location_tags'
  },
];
