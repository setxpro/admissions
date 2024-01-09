import React, { createContext, useContext, useState } from 'react'; // importando as paradas
import { ChildrenType } from '../../@types/Children'; // importando o tipo do filho

interface Props { // definindo uma interface
   isWrapperSidebar: boolean;
   wrapperSidebar: () => void;
}

const DrawersContext = createContext({} as Props); // criando o contexto e definindo o valor inicial como um objeto vazio, fazendo ele ser do tipo Props

export const DrawersProvider: React.FC<ChildrenType> = ({children}) => { // cria um componente funcional que vai receber um valor do tipo childrenType

/*
   Children são os objetos que serão envoltos do componente DrawersProvider
*/

   const [isWrapperSidebar, setIsWrapperSidebar] = useState(false); // definindo um state com o valor inicial false

   const wrapperSidebar = () => setIsWrapperSidebar(!isWrapperSidebar) // definindo uma função que altera o valor de estado do  isWrapperSidebar

  return (
   /* 
      Todo contexto precisa ter um provider, isto é, os dados que serão providos aos componentes que estão envoltos pelo "DrawersContext.Provider"
      Aqui, ao invés de precisar escrever "DrawersContext.Provider" em torno do componente você só precisa chamar o componente "DrawersProvider"
      Além disso, são passados como valores do contexto a função "wrapperSidebar" e o estado "isWrapperSidebar"
      O {children} representa todas as "tags" que serão envoltas do provider e que terão acesso aos valores do contexto.
   */
   <DrawersContext.Provider value={{
      wrapperSidebar,
      isWrapperSidebar
   }}>{children}</DrawersContext.Provider>
  );
}


export const useDrawers = () => { // cria uma arrow function
   /*
      Para utilizar os dados do contexto é necessário ir no child e usar o useContext passando o parâmetro do contexto,
      aqui foi feita uma automoção. Basicamente o useDrawers já retorna o drawer e através desse drawer eu já tenho acesso direto 
      aos valores do contexto
   */
   const drawer = useContext(DrawersContext); 
   return drawer;
}
