import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import SignInSide from '../../pages/Login';

type ChildrenJSX = {
   children: JSX.Element;
}

const Interceptor: React.FC<ChildrenJSX> = ({children}) => {
   const { user } = useContext(AuthContext);
   if (user) {
      return <SignInSide/>;
   }

   return children;

}

export default Interceptor;