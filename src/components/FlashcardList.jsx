import React from 'react'
import Flashcard from './Flashcard'


function FlashcardList({cards,handleRemove}) {
  return (
    
    <div className='w-full  h-80 overflow-auto flex justify-center gap-4  flex-wrap-4'>
    {cards.map((item, index)=>{
        return <Flashcard handleRemove={handleRemove} key={index} id={index} card={item}/>
    })}  
    </div>
  )
}

export default FlashcardList