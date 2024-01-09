import React, { useContext } from "react";

import * as C from "./styles";
import { useDrawers } from "../../contexts/Drawers";
import { AuthContext } from "../../contexts/Auth";

const Header: React.FC = () => {
   const { wrapperSidebar } = useDrawers(); // só estou utilizando a função do contexto
   const { user } = useContext(AuthContext)
   return (
      <>
         <C.Container>
            <C.LeftSide>
               <div className="icon">
                  <button onClick={wrapperSidebar}>
                     <C.BarsIcon />
                  </button>
               </div>
            </C.LeftSide>
            <C.RigthSide>
               <C.ContentRigthAvatarAndName>
                  <C.ContentRigthName>
                     <h3>{user?.name} {user?.middlename}</h3>
                     <h6>{user?.role?.toLocaleLowerCase()}</h6>
                  </C.ContentRigthName>
                  <C.ContentRigthAvatar>
                     <img src={user?.avatar ? user?.avatar : "data:image/png;base64,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"} alt="" />
                  </C.ContentRigthAvatar>
               </C.ContentRigthAvatarAndName>
            </C.RigthSide>
         </C.Container>
      </>
   );
};

export default Header;
