import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav } from '../elementos/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/reuniones">Reuniones</Link></li>
          <li><Link to="/contactos">Contactos</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
