import { openDB } from 'idb';

export const initDB = async () => {
  return openDB('noteday-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};
