// src/views/Pokemones.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonImagen, setPokemonImagen] = useState('');
  const { name } = useParams();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  useEffect(() => {
    const pokemonName = name || pokemones[0]?.name;
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => setPokemonImagen(data.sprites.front_default));
    }
  }, [name, pokemones]);

  const handleChange = (event) => {
    const pokemonName = event.target.value;
    window.location.href = `/pokemones/${pokemonName}`;
  };

  return (
    <div>
      <select value={name || ''} onChange={handleChange}>
        <option value="">Seleccione un Pokémon</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {name && (
        <div>
          <h2>Has seleccionado: {name}</h2>
          <img src={pokemonImagen} alt={name} />
        </div>
      )}
    </div>
  );
};

export default Pokemones;

