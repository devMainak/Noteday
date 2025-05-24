import { useNotes } from '../hooks/useNotes';

const Home = () => {
  const { notes, addNote } = useNotes();

  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-3xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Noteday</h1>
        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Note
        </button>
      </header>

      <section>
        {notes.length === 0 ? (
          <p className="text-gray-500">
            No notes yet. Click "New Note" to add one.
          </p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li
                key={note.id}
                className="border p-3 rounded mb-2 bg-white shadow-sm"
              >
                <h2 className="font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-600 truncate">
                  {note.content || 'No content'}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Updated at: {new Date(note.updatedAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;
