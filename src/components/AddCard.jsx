import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function AddCard({ handleformSubmitData, editCard }) {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (editCard) {
      setValue('Question', editCard.Question);
      setValue('Answer', editCard.Answer);
    } else {
      reset();
    }
  }, [editCard, setValue, reset]);

  const handleformSubmit = (data) => {
    handleformSubmitData(data);
    reset();
  };

  return (
    <div className='mt-10 flex flex-col gap-8 items-center'>
      <h2 className='text-blue-600 font-bold text-3xl font-mono underline underline-offset-8'>
        {editCard ? 'Edit FlashCard' : 'Add a FlashCard'}
      </h2>
      <form className='flex flex-col gap-6 w-full max-w-lg' onSubmit={handleSubmit(handleformSubmit)}>
        <input
          {...register('Question')}
          className='rounded-md px-4 py-2 border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
          type='text'
          placeholder='Question'
        />
        <input
          {...register('Answer')}
          className='rounded-md px-4 py-2 border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
          type='text'
          placeholder='Answer'
        />
        <input
          className='rounded-md px-5 py-2 bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition duration-300 cursor-pointer w-full'
          type='submit'
          value={editCard ? 'Update' : 'Add'}
        />
      </form>
    </div>
  );
}

export default AddCard;
