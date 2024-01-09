import React from 'react';

import { Container } from './styles';

import SVGNotfound from './notfound.svg'
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {

   const navigate = useNavigate();

  return (
   <Container>
      <img src={SVGNotfound} alt="not-found"/>
      <button onClick={() => navigate('/')}>Voltar para a página inicial</button>
   </Container>
  );
}

export default NotFound;