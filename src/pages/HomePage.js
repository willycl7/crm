import React from 'react';
import { FullScreenContainer, Greetings, ButtonContainer, Button, ResponsiveStyles } from '../elementos/HomeStyles';

const Home = () => {
  return (
    <FullScreenContainer css={ResponsiveStyles}>
      <Greetings>
        <span>Evaluación</span> <span> Full Stack</span>
      </Greetings>
      <ButtonContainer>
        <Button>
          <a href="/clientes">Clientes</a>
        </Button>
        <Button>
          <a href="/proyectos">Proyectos</a>
        </Button>
        <Button>
          <a href="/reuniones">Reuniones</a>
        </Button>
        <Button>
          <a href="/contactos">Contactos</a>
        </Button>
      </ButtonContainer>
    </FullScreenContainer>
  );
};

export default Home;
