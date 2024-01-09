import React, { createContext, useEffect, useState } from 'react';
import { UserGeneric } from '../../@types/User';
import useApi from '../../hooks/useApi';
import { ChildrenType } from '../../@types/Children';


type AuthContext = {
   user: UserGeneric | null;
   signin: (login: string, password: string) => Promise<boolean>;
   logout: () => void;
}

export const AuthContext = createContext<AuthContext>(null!)

const AuthProvider: React.FC<ChildrenType> = ({children}) => {
   const [user, setUser] = useState<UserGeneric | null>(null);
   const api = useApi()

   const signin = async (login: string, password: string) => {
      const data = await api.signin(login, password);
      if (data) {
         if (data.role)
         setUser(data)
         setUserInLocalStorage(data);
         return true;
      }
      return false;
   }


   const logout = () => {
      localStorage.removeItem("auth:user-bagaggio")
      setUser(null);
   }

   const setUserInLocalStorage = (user: string) => {
      const storage = localStorage.setItem("auth:user-bagaggio", JSON.stringify(user));
      return storage;
   }


   useEffect(() => {
      const storage = localStorage.getItem("auth:user-bagaggio")
      if (storage) {
         const haveStorage = JSON.parse(storage)
         return setUser(haveStorage);
      }
   }, [])

  return (
   <AuthContext.Provider value={{signin, user, logout}}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;