import React from 'react';
import { useState } from 'react';
import './style.css';

export default function Pokemon(props) {

  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes((value) => value + 1);
  };

  const [name, setName] = useState(props.name)

  const inputHandler = (event) => {
    setName (event.target.value)
  }

  return (
      <section className="Pokemon">
       <h2>{name}</h2>
       <p>Likes: {likes}</p>
       <input onChange={inputHandler} type = "text" value={name}/>
       <button onClick={addLike}>Like</button>
      </section>
  );
}