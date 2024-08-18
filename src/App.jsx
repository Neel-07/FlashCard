import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import AddCard from './components/AddCard';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [editCard, setEditCard] = useState(null);

  const handleformSubmitData = (data) => {
    if (editCard !== null) {
      setCards(cards.map((card, index) => (index === editCard ? data : card)));
      setEditCard(null);
    } else {
      setCards([...cards, data]);
    }
  };

  const handleRemove = (id) => {
    setCards(() => cards.filter((item, index) => index !== id));
  };

  const handleEdit = (id) => {
    setEditCard(id);
  };

  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
      <div className='container mx-auto'>
        <FlashcardList handleRemove={handleRemove} handleEdit={handleEdit} cards={cards} />
        <AddCard handleformSubmitData={handleformSubmitData} editCard={editCard !== null ? cards[editCard] : null} />
      </div>
    </div>
  );
}

export default App;
