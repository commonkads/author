import type { IStorageBackend } from '@commonkads/engine';

/** Extends `IStorageBackend` with write and delete operations on knowledge files. */
export interface IWritableStore extends IStorageBackend {
  write(path: string, content: string): Promise<void>;
  delete(path: string): Promise<void>;
}
