import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };
useEffect(()=>{
  const  time= thought.expiresAt - Date.now()
  const timeId = setTimeout(() => {
    removeThought(thought.id);
  },time );
  return () => {
    clearInterval(timeId);}
},[thought,removeThought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
