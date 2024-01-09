import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth";


function Copyright(props: any) {
   return (
      <Typography
         variant="body2"
         color="text.secondary"
         align="center"
         {...props}
      >
         {"Copyright © "}
         <Link color="inherit" href="https://bagaggio.com.br">
            Bagaggio
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {


   const [login, setLogin] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [checkBox, setCheckBox] = React.useState(false);

   const { signin } = React.useContext(AuthContext);


   const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();

      if (!login) {
         return toast.error("Por favor, insira ao menos um login.");
      }
      if (!password) {
         return toast.error("Por favor, insira ao menos uma senha.");
      }
      const user = { login, password, checkBox };

      if (checkBox) {
         setStorage(user);
      }

      return signin(login, password) 

   };

   function setStorage(auth: any) {
      const storage = localStorage.setItem("auth-login", JSON.stringify(auth));
      return storage;
   }
   const toggleChecked = () => {
      setCheckBox(!checkBox);
      if (checkBox) {
         return localStorage.removeItem("auth-login");
      }
   };
 
   React.useEffect(() => {
      const haveAuth = localStorage.getItem("auth-login");
      if (haveAuth) {
         const findAuth = JSON.parse(haveAuth);
         setLogin(findAuth.login);
         setPassword(findAuth.password);
         setCheckBox(findAuth.checkBox);
      }
   }, []);

   return (
      <ThemeProvider theme={defaultTheme}>
         <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
               item
               xs={false}
               sm={4}
               md={7}
               sx={{
                  backgroundImage: "url('/bagaggio.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                     t.palette.mode === "light"
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            />
            <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
         >
            <Box
               sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Typography component="h1" variant="h5">
                  Fazer Login
               </Typography>
               <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="E-mail/Login"
                     name="email"
                     autoComplete="email"
                     autoFocus
                     // inputProps={{ maxLength: 14}}
                     value={login}
                     onChange={(e) => setLogin(e.target.value)}
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     autoComplete="current-password"
                  />
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                     {" "}
                     <FormControlLabel
                        control={
                           <Checkbox
                              value="remember"
                              color="primary"
                              checked={checkBox}
                              onClick={toggleChecked}
                           />
                        }
                        label="Remember me"
                     />
                  </div>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2, background: "#005041" }}
                     onClick={handleSubmit}
                  >
                     Entrar
                  </Button>
                  <Copyright sx={{ mt: 5 }} />
               </Box>
            </Box>
         </Grid>
         </Grid>
      </ThemeProvider>
   );
}
