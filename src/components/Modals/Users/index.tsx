import React from 'react';

import * as C from './styles';
import { useNavigate } from 'react-router-dom';

const UsersModal: React.FC = () => {

   const navigate = useNavigate();

  return(
   <C.Container>
      <C.UserModalContainer>
         <C.UserModalHeaderContainer>
            <button onClick={() => navigate('/users')}>VOLTAR</button>
            <h1>Patrick Anjos da Rocha</h1>
            <div/>
         </C.UserModalHeaderContainer>
         <C.UserModalMiddleContainer>MIDDLE MODAL</C.UserModalMiddleContainer>
         <C.UserModalFooterContainer>FOOTER MODAL</C.UserModalFooterContainer>
      </C.UserModalContainer>
   </C.Container>
  );
}

export default UsersModal;