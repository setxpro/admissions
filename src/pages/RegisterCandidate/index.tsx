import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import * as C from "./styles";
import useApi from "../../hooks/useApi";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const RegisterCandidate = () => {
   const { createCandidate } = useApi();
   const navigate = useNavigate();

   const [name, setName] = React.useState("");
   const [middlename, setMiddlename] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [loading, setLoading] = React.useState(false);

   const handleSubmit = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setLoading(true);
      const data = await createCandidate(`${name} ${middlename}`, email);
      return data;
   };

   return (
      <C.Container>
         <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
               <CssBaseline />

               <Box
                  sx={{
                     marginTop: 8,
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
                     {loading ? (
                        <TaskAltRoundedIcon />
                     ) : (
                        <AssignmentIndRoundedIcon />
                     )}
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     {loading
                        ? "Usuário cadastrado com sucesso."
                        : "Cadastro de usuários"}
                  </Typography>
                  {loading ? <Link to="/users">VOLTAR</Link> : ""}
                  {loading ? (
                     ""
                  ) : (
                     <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 autoComplete="given-name"
                                 name="firstName"
                                 required
                                 fullWidth
                                 id="firstName"
                                 label="Nome"
                                 autoFocus
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 fullWidth
                                 id="lastName"
                                 label="Sobrenome"
                                 name="lastName"
                                 autoComplete="family-name"
                                 value={middlename}
                                 onChange={(e) => setMiddlename(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <TextField
                                 required
                                 fullWidth
                                 id="email"
                                 label="E-mail"
                                 name="email"
                                 autoComplete="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                              />
                           </Grid>
                        </Grid>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                           <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="success"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleSubmit}
                           >
                              CADASTRAR
                           </Button>
                           <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="inherit"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={() => navigate("/users")}
                           >
                              VOLTAR
                           </Button>
                        </div>
                     </Box>
                  )}
               </Box>
            </Container>
         </ThemeProvider>
      </C.Container>
   );
};

export default RegisterCandidate;
