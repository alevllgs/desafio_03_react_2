
import { NavLink } from 'react-router-dom';
import './Navegacion.css'; 

const Navegacion = () => {
  return (
    <nav className="navegacion">
      <div className="pokeball-icon"></div>
      <div className="navegacion-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/pokemones" className={({ isActive }) => isActive ? 'active' : ''}>Pokemones</NavLink>
      </div>
    </nav>
  );
};

export default Navegacion;




