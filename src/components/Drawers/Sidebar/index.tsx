import React, { useContext } from 'react';
import { useDrawers } from '../../../contexts/Drawers';

import * as C from './styles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth';

const Sidebar: React.FC = () => {

   const { isWrapperSidebar, wrapperSidebar } = useDrawers(); 
   const { user, logout } = useContext(AuthContext)

      const filterUsersRole = [
         "RH",
         "DEVELOPER",
         "ADMIN"
      ]

      const candidateFilter = [
         "CANDIDATE",
         "DEVELOPER"
      ]


  return (
   <>
      <C.SidebarContent isWrapperSidebar={isWrapperSidebar}>
         {/** SIDEBAR */}
         <C.SidebarHeaderMenu>
            <div/>
            <h2>BAGAGGIO</h2>
            <button onClick={wrapperSidebar}><C.CloseIcon/></button>
         </C.SidebarHeaderMenu>
         <C.SidebarMiddleMenu>
            <Link to="/" onClick={wrapperSidebar}><span><C.HomeIcon/></span>Home</Link>
            {filterUsersRole.includes(`${user?.role}`) && <Link to="/users" onClick={wrapperSidebar}><span><C.UsersIcon/></span>Users</Link>}
            {user?.role === "DEVELOPER" && <Link to="/register" onClick={wrapperSidebar}><span><C.CreateUserIcon/></span>Create Admin</Link>}
            {candidateFilter.includes(`${user?.role}`) && <Link to="/candidate-register" onClick={wrapperSidebar}><span><C.UsersIcon/></span>Área do Candidato</Link>}
            {/** remove link   */}
            <Link to="/candidate-register" onClick={wrapperSidebar}><span><C.UsersIcon/></span>Área do Candidato</Link>
         </C.SidebarMiddleMenu>
         <C.SidebarFooterMenu>
            <button onClick={logout}>LOGOUT</button>
         </C.SidebarFooterMenu>
         </C.SidebarContent>
      <C.ShadowContent onClick={wrapperSidebar} isWrapperSidebar={isWrapperSidebar}>
       
      </C.ShadowContent>
   </>
  );
}

export default Sidebar;