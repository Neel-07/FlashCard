import React, { useState } from 'react'
import FlashcardList from './components/FlashcardList'
import AddCard from './components/AddCard'
import './App.css';


function App() {
  const [cards, setCards] = useState([]);

  const handleformSubmitData = (data)=>{setCards([...cards,data]) };

  const handleRemove = (id) => {
    setCards(()=>cards.filter((item,index)=>index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
      <div className='container mx-auto'>
      <FlashcardList handleRemove={handleRemove} cards={cards}/>
      <AddCard handleformSubmitData={handleformSubmitData}/>
    </div>
    </div>
    
  )
}

export default App