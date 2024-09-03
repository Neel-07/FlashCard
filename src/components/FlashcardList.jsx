import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flashcard from './Flashcard';

function FlashcardList({ cards, handleRemove, handleEdit }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Adjust currentIndex if it's out of bounds after cards change (either added or removed)
    if (currentIndex >= cards.length) {
      setCurrentIndex(cards.length - 1);
    } else if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [cards, currentIndex]);

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

  const handleRemoveCard = (id) => {
    handleRemove(id);
    // Adjust currentIndex if needed after a card is removed
    if (currentIndex >= cards.length - 1) {
      setCurrentIndex(cards.length - 2 >= 0 ? cards.length - 2 : 0);
    }
  };

  if (!cards || cards.length === 0) {
    return <div className="text-center text-gray-700">No flashcards available</div>;
  }

  return (
    <div className='flex justify-center items-center gap-6 mt-8'>
      <button onClick={goToPrevious} className='p-2 text-gray-600 hover:text-gray-800 transition duration-300'>
        <FaArrowLeft size={24} />
      </button>
      <div className='w-64'>
        <Flashcard
          handleRemove={handleRemoveCard}
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
