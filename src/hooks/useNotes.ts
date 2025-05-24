import { useEffect, useState } from 'react';
import { initDB } from '../utils/idb';
import { v4 as uuidv4 } from 'uuid';
import type { Note } from '../types/note';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    (async () => {
      const db = await initDB();
      const allNotes = await db.getAll('notes');
      setNotes(allNotes);
    })();
  }, []);

  const addNote = async () => {
    const db = await initDB();
    const newNote: Note = {
      id: uuidv4(),
      title: 'Untitled',
      content: '',
      updatedAt: new Date().toISOString(),
      synched: false,
    };
    await db.put('notes', newNote);
    setNotes((prev) => [...prev, newNote]);
  };

  return { notes, addNote };
};
