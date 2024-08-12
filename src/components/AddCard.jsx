import React from 'react'
import { useForm } from 'react-hook-form'

function AddCard({handleformSubmitData}) {
        const {register, handleSubmit, reset} = useForm();
        const handleformSubmit = (data) => {
           handleformSubmitData(data);
           reset();
        }
       
  return (
    <div className='mt-10 flex flex-col gap-10 justify-center'>
        <h2 className=' mt-40 text-red-500 font-sans underline underline-offset-8 font-semibold text-3xl'>Add a FlashCard</h2>
        <form  className=' flex gap-10' onSubmit={handleSubmit(handleformSubmit)}>
            <input {...register('Question')} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' type="text" placeholder='Question'/>
            <input {...register('Answer')} className='rounded-md px-2 py-1 text-base font-semibold outline-none ' type="text"  placeholder='Answer'/>
            <input  className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold 'type="submit" />
        </form>
    </div>
  )
}

export default AddCard