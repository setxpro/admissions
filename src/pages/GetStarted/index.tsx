import React from 'react';

import * as C from './styles';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  return (
   <C.Container>
      <C.HeaderGetStarted>
         <h2>BAGAGGIO</h2>
         <C.ContentMenu>
            <Link to="/login">Login como candidato</Link>
            <Link to="/login-admin">Admin</Link>
         </C.ContentMenu>
      </C.HeaderGetStarted>
      <div>

      </div>
   </C.Container>
  );
}

export default GetStarted;