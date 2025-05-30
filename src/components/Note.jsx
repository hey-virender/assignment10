import React from "react";

const Note = ({ title, description, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col relative">
      <button
        onClick={onDelete}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors duration-200"
        title="Delete note"
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 pr-8">
        {title}
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default Note;
