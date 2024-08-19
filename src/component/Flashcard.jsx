import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card-content ${flipped ? 'flipped' : ''}`}>
        <div className="front">{flashcard.question}</div>
        <div className="back">{flashcard.answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
