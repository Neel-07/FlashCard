import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });

  useEffect(() => {
    axios.get('/api/flashcards')
      .then(response => setFlashcards(response.data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  const handleAdd = () => {
    axios.post('/api/flashcards', newFlashcard)
      .then(response => {
        setFlashcards([...flashcards, response.data]);
        setNewFlashcard({ question: '', answer: '' });
      })
      .catch(error => console.error('Error adding flashcard:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`/api/flashcards/${id}`)
      .then(() => {
        setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
      })
      .catch(error => console.error('Error deleting flashcard:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFlashcard(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        type="text"
        name="question"
        value={newFlashcard.question}
        onChange={handleChange}
        placeholder="Question"
      />
      <input
        type="text"
        name="answer"
        value={newFlashcard.answer}
        onChange={handleChange}
        placeholder="Answer"
      />
      <button onClick={handleAdd}>Add Flashcard</button>

      <ul>
        {flashcards.map(flashcard => (
          <li key={flashcard.id}>
            {flashcard.question} - {flashcard.answer}
            <button onClick={() => handleDelete(flashcard.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
