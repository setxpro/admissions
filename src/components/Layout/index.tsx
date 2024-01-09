import React from "react";

import { Container } from "./styles";
import Header from "../Header";
import { DrawersProvider } from "../../contexts/Drawers";
import Sidebar from "../Drawers/Sidebar";


type ChildrenProps={
   children: React.ReactNode;
}




const Layout: React.FC<ChildrenProps> = ({children}) => {
   return (
      <Container>
         <DrawersProvider>   
         {/* Estou definindo que esses serão os "childrens" do meu contexto, i.e., 
            as tags envoltas do meu Drawer terão acesso aos valores do contexto
         */}
            <Header/>
            <Sidebar/>
            {children}  
         </DrawersProvider>
      </Container>
   )
};

export default Layout;
