// src/components/Navegacion.jsx
import { NavLink } from 'react-router-dom';
import './Navegacion.css'; // Importar el archivo CSS

const Navegacion = () => {
  return (
    <nav className="navegacion"> {/* Agregar la clase "navegacion" */}
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/pokemones" className={({ isActive }) => isActive ? 'active' : ''}>Pokemones</NavLink>
    </nav>
  );
};

export default Navegacion;




