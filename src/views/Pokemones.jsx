// src/views/Pokemones.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Pokemones.css'; // Importar el archivo CSS para la vista Pokemones

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonImagen, setPokemonImagen] = useState('');
  const [speciesInfo, setSpeciesInfo] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
          setPokemonImagen(data.sprites.front_default);
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then(response => response.json())
            .then(speciesData => setSpeciesInfo(speciesData));
        });
    } else {
      setSpeciesInfo(null);
    }
  }, [name]);

  const handleChange = (event) => {
    const pokemonName = event.target.value;
    window.location.href = `/pokemones/${pokemonName}`;
  };

  return (
    <div className="pokemones-container">
      <select className="pokemon-select" value={name || ''} onChange={handleChange}>
        <option value="">Seleccione un Pokémon</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {name && (
        <div className="pokemon-info-container">
          <img src={pokemonImagen} alt={name} className="pokemon-image" />
          {speciesInfo && (
            <div>
              <h3>Información de la especie:</h3>
              <ul>
                <li>Nombre: {speciesInfo.name}</li>
                <li>Orden: {speciesInfo.order}</li>
                <li>Tasa de género: {speciesInfo.gender_rate}</li>
                <li>Tasa de captura: {speciesInfo.capture_rate}</li>
                <li>Felicidad base: {speciesInfo.base_happiness}</li>
                <li>Es bebé: {speciesInfo.is_baby ? 'Sí' : 'No'}</li>
                <li>Es legendario: {speciesInfo.is_legendary ? 'Sí' : 'No'}</li>
                <li>Es mítico: {speciesInfo.is_mythical ? 'Sí' : 'No'}</li>
                <li>Contador de eclosión: {speciesInfo.hatch_counter}</li>
                <li>Diferencias de género: {speciesInfo.has_gender_differences ? 'Sí' : 'No'}</li>
                <li>Formas intercambiables: {speciesInfo.forms_switchable ? 'Sí' : 'No'}</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokemones;




