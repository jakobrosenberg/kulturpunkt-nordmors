import * as migration_20260326_170702_init from './20260326_170702_init';

export const migrations = [
  {
    up: migration_20260326_170702_init.up,
    down: migration_20260326_170702_init.down,
    name: '20260326_170702_init'
  },
];
