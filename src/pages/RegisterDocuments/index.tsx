import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Paper, Toolbar, Typography } from "@mui/material";

import SimpleAccordion from "../../components/SimpleAccordion";
import { higherForm } from "../../components/menus";

import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

const RegisterDocuments: React.FC = () => {
   
   const { user, logout } = useContext(AuthContext);
   const [currentStep, setCurrentStep] = useState<number[]>([]);
   const { findStep } = useApi();
   
   const navigate = useNavigate()

   useEffect(() => {
      (async () => {
         const data = await findStep(`${user?._id}`);
         if(data) {
            setCurrentStep(data)
         }
      })()
   }, [])

   return (
      <>
         <Toolbar
            sx={{
               backgroundColor: "#053",
               position: "sticky",
               top: "0",
               zIndex: "999",
               display: 'flex',
               justifyContent: 'space-between'
            }}
         >
            <Typography variant="h6" color="#ddd" noWrap>
               BAGAGGIO
            </Typography>
            <Button onClick={logout} color="primary">SAIR</Button>
         </Toolbar>
         <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
            <div style={{height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
               <h1 style={{ fontWeight: '400' }}>{user?.name} {user?.middlename}</h1>
               <h4 style={{ fontWeight: '400' }}>Seja bem-vindo!</h4>
               {user?.role === "DEVELOPER" && <Button onClick={() => navigate('/')} color="inherit" variant="contained" style={{alignSelf: 'flex-start', marginTop: '20px'}}>VOLTAR</Button>}
               
            </div>
            <Paper
               variant="outlined"
               sx={{
                  my: { xs: 3, md: 6 },
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
               }}
            >
               {higherForm.map((item: any) => (
                  <SimpleAccordion
                     key={item.id}
                     title={item.title}
                     children={item.form}
                     step={currentStep}
                     id={item.id}
                  />
               ))}
               <Button
                  onClick={e => e.preventDefault()}
                  variant="contained"
                  color={currentStep.length === 16 ? "success" : "warning"}
                  style={{ marginTop: "10px", textAlign: "end" }}
               >
                  {currentStep.length === 16 ? "DADOS ENVIADOS COM SUCESSO" : "EM ANDAMENTO"}
                  
               </Button>
            </Paper>
         </Container>
      </>
   );
};

export default RegisterDocuments;
