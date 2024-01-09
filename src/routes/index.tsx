import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Users from "../pages/Users";
import UsersModal from "../components/Modals/Users";
import Login from "../pages/Login";
import RegisterDocuments from "../pages/RegisterDocuments";

import TiposDependencia from "../pages/TiposDependencia";
import GetStarted from "../pages/GetStarted";
import Interceptor from "../components/Interceptor";
import RegisterCandidate from "../pages/RegisterCandidate";
import CPF from "../pages/CPF";
import CTPS from "../pages/CTPS";
import CNH from "../pages/CNH";
import RG from "../pages/RG";
const AppRoutes: React.FC = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Interceptor>
                  <Layout>
                     <Home />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/candidate-register"
            element={
               <Interceptor>
                  <RegisterDocuments />
               </Interceptor>
            }
         />

         <Route
            path="/register"
            element={
               <Interceptor>
                  <Layout>
                     <Register />
                  </Layout>
               </Interceptor>
            }
         />

         {/** New routes */}
         <Route
            path="/create-cpf"
            element={
               <Interceptor>
                  <Layout>
                     <CPF />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/create-ctps"
            element={
               <Interceptor>
                  <Layout>
                     <CTPS />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/create-cnh"
            element={
               <Interceptor>
                  <Layout>
                     <CNH />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/create-rg"
            element={
               <Interceptor>
                  <Layout>
                     <RG />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/users"
            element={
               <Interceptor>
                  <Layout>
                     <Users />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/users/:id"
            element={
               <Interceptor>
                  <Layout>
                     <UsersModal />
                  </Layout>
               </Interceptor>
            }
         />
         <Route
            path="/candidate-register/dependencias"
            element={<TiposDependencia />}
         />

         <Route path="/register-candidate" element={<RegisterCandidate/>}/>
       
         <Route path="/login-candidate" element={<Login />} />
         <Route path="/get-started" element={<GetStarted />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default AppRoutes;
