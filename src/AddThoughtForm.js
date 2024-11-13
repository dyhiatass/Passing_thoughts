import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm(props) {
  const { addThought } = props; // 
  const [text, setText] = useState(''); 
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    if (text.length > 0) {
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };

      addThought(newThought); // 
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
      className='search'
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text} 
        onChange={handleTextChange} 
      />
      <input type="submit" value="Add" />
    </form>
  );
}
