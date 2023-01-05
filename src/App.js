import React from 'react';
import { useState } from 'react';
import Pokemon from './Pokemon';
import './style.css';

export default function App () {
  const [pokedex, setPokedex] = useState([
    "Mimikyue",
    "Pikachu",
    "Piplup"
  ])

  const showPokemon = pokedex.map((value, index) => (
   <Pokemon name={value}/>
  ))

  return (
    <div>
      <h1> Programming 6</h1>
      {showPokemon}
      <button onClick={() => {

        setPokedex([...pokedex, "Charmander"])
      }}>Add Pokemon</button>
    </div>
  );
}
