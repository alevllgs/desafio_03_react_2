// src/components/Navegacion.jsx
import { NavLink } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/pokemones" className={({ isActive }) => isActive ? 'active' : ''}>Pokemones</NavLink>
    </nav>
  );
};

export default Navegacion;



