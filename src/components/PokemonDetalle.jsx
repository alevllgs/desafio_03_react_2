// src/components/PokemonDetalle.jsx
import { useParams } from 'react-router-dom';

const PokemonDetalle = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Detalles del Pokémon: {name}</h1>
    </div>
  );
};

export default PokemonDetalle;
