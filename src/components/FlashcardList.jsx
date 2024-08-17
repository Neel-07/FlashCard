import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flashcard from './Flashcard';

function FlashcardList({ cards, handleRemove }) {
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
    return <div>No flashcards available</div>;
  }

  return (
    <div className='w-full h-80 flex justify-center items-center gap-4'>
      <button onClick={goToPrevious} className='p-2'>
        <FaArrowLeft size={24} />
      </button>
      <div className='w-64'>
        <Flashcard handleRemove={handleRemove} id={currentIndex} card={cards[currentIndex]} />
      </div>
      <button onClick={goToNext} className='p-2'>
        <FaArrowRight size={24} />
      </button>
    </div>
  );
}

export default FlashcardList;
