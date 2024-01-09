import React, { useEffect, useState } from 'react';

import * as C from './styles';
import TBody from './Table/TBody';
import useApi from '../../hooks/useApi';
import { User } from '../../@types/User';
import { useNavigate } from 'react-router-dom';

const Users: React.FC = () => {

   const { getAllCandidates } = useApi();
   const [candidates, setCandidates] = useState<User[]>([])


   useEffect(() => {
      (async () => {
         const data = await getAllCandidates();
         setCandidates(data);
      })()
   }, [])

   const navigate = useNavigate();

  return (
   <C.Container>
      <C.ContentAvatarArea>
         <h1>Usuários</h1>
         <C.InputSearchArea>
            <input type="text" name="search" placeholder='Buscar pelo Cargo' />
            <C.SearchIcon/>
         </C.InputSearchArea>
         <button id="addCandidate" onClick={() => navigate('/register-candidate')}>Adicionar</button>
      </C.ContentAvatarArea>
      <C.TableContent>
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Status</th>
                  <th colSpan={3}>Actions</th>
               </tr>
            </thead>
            <tbody>
               <TBody candidates={candidates}/>
            </tbody>
         </table>
      </C.TableContent>
   </C.Container>
  );
}

export default Users;