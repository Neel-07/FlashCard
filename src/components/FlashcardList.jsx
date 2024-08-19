import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flashcard from './Flashcard';

function FlashcardList({ cards, handleRemove, handleEdit }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!cards || cards.length === 0) {
    return <div className=" text-center text-gray-700">No flashcards available</div>;
  }

  return (
    <div className='flex justify-center items-center gap-6 mt-8'>
      <button onClick={goToPrevious} className='p-2 text-gray-600 hover:text-gray-800 transition duration-300'>
        <FaArrowLeft size={24} />
      </button>
      <div className='w-64'>
        <Flashcard
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          id={currentIndex}
          card={cards[currentIndex]}
        />
      </div>
      <button onClick={goToNext} className='p-2 text-gray-600 hover:text-gray-800 transition duration-300'>
        <FaArrowRight size={24} />
      </button>
    </div>
  );
}

export default FlashcardList;
