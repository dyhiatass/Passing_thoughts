import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utils/Utilities';
import './App.scss'
export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    console.log(thought);
    setThoughts((prevThoughts) => [...prevThoughts,thought ]);
  };// addThought function

  const removeThought=(thoughtIdRemove)=>{
setThoughts((prev)=>{
return prev.filter(elt=>elt.id !== thoughtIdRemove )
}
)
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}  />
        <ul className="thoughts">
        {thoughts.map(thought=>(
          <Thought thought={thought} removeThought={removeThought}
          key={thought.id} />
        ))}
        </ul>
      </main>
    </div>
  );
}
