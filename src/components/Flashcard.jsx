import React, { useState } from 'react'

function Flashcard({ card, handleRemove, id }) {
  const [flip,setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)} className={`card w-56 h-full bg-zinc-100 rounded-lg flex flex-col justify-between items-center p-2 ${flip ? 'flip' : ''}`}>
    
    <h1 className='back truncate  text-xl font-semibold'>{card.Answer}</h1>
    
    <h1 className='front  text-xl font-semibold'>{card.Question}</h1>
        
   
    <div className='buttons flex gap-2'>
    <button  className=' px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Edit</button>
    <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Remove It</button>
    </div>
    
   </div>
   
  )
}

export default Flashcard