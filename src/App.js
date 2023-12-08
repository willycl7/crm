// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/app.css';
import Home from './pages/HomePage';
import ClientePage from './pages/ClientePage';
import ProyectoPage from './pages/ProyectoPage';
import ReunionPage from './pages/ReunionPage';
import ContactoPage from './pages/ContactoPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<ClientePage />} />
            <Route path="/proyectos" element={<ProyectoPage />} />
            <Route path="/reuniones" element={<ReunionPage />} />
            <Route path="/contactos" element={<ContactoPage />} />
          </Routes>
        </main>

        <footer>
          {/* Pie de página irá aquí */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
