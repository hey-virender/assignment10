import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "Test Title",
      description: "Test Description",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Add Note Button */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create New Note
            </button>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.length > 0 ? (
              notes.map((note, idx) => (
                <Note
                  key={idx}
                  title={note.title}
                  description={note.description}
                  onDelete={() => handleDeleteNote(idx)}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-4">
                No notes yet. Create a new note to get started.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Create Note Modal */}
      <CreateNote
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddNote={handleAddNote}
      />
    </div>
  );
};

export default App;
