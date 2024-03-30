// src/views/Home.jsx
import React from 'react';
import './Home.css'; // Importar el archivo CSS para la vista Home

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <h1 className="titulo_home">Bienvenido maestro pokemon</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" />
      </div>
    </div>
  );
};

export default Home;


