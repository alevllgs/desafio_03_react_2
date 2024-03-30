// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import Home from './views/Home';
import Pokemones from './views/Pokemones';

const App = () => {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Pokemones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;





