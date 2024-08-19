import React, { useState } from "react";

function Flashcard({ card, handleRemove, handleEdit, id }) {
  const [flip, setFlip] = useState(false);

  if (!card) {
    return <div>No flashcard available</div>;
  }

  return (
    <div
      onClick={() => setFlip(!flip)}
      className={` relative card w-64 h-96 bg-zinc-100 rounded-lg flex flex-col justify-between items-center  p-4 ${
        flip ? "flip" : ""
      }`}
    >
      {/* Front Side */}
      <div className="absolute front w-full h-full flex flex-col justify-between items-center -mt-8">
        <h1 className="flex-grow  flex items-center justify-center text-xl font-semibold text-center truncate mt-12 whitespace-normal">
          {card.Question}
        </h1>
        <div className="buttons flex gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(id);
            }}
            className="px-4 py-2 bg-blue-600 text-xs rounded-md font-semibold text-white hover:bg-blue-700 transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove(id);
            }}
            className="px-4 py-2 bg-red-600 text-xs rounded-md font-semibold text-white hover:bg-red-700 transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Back Side */}
      <div className=" absolute back w-full h-full flex flex-col justify-between items-center transform rotate-y-180 -mt-8">
        <h1 className="flex-grow flex items-center justify-center text-xl font-semibold text-center truncate mt-12 whitespace-normal px-3">
          {card.Answer}
        </h1>
        <div className="buttons  flex gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(id);
            }}
            className="px-4 py-2 bg-blue-600 text-xs rounded-md font-semibold text-white hover:bg-blue-700 transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove(id);
            }}
            className="px-4 py-2 bg-red-600 text-xs rounded-md font-semibold text-white hover:bg-red-700 transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
