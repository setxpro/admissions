import {
   Box,
   Button,
   Container,
   FormControl,
   InputLabel,
   MenuItem,
   Paper,
   Select,
   SelectChangeEvent,
   TextField,
   Toolbar,
   Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setStorage } from "../../functions/storage";

const TiposDependencia: React.FC = () => {
   const navigate = useNavigate();
   function routPath(path: string) {
      const route = `/candidate-register/dependencias/${path}`;
      return navigate(route);
   }

   const [nome, setNome] = React.useState("");
   const [tipoDependencia, setTipoDependencia] = React.useState("");

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      if (!nome) {
         return toast.warning("Insira o nome do dependente");
      }
      if (!tipoDependencia) {
         return toast.warning("Selecione uma dependência");
      }

      setStorage("nameDependent", nome);
      switch (tipoDependencia.toString()) {
         case "1":
            routPath("dependente-conjuge");
            break;
         case "2":
            routPath("comp-filho-uniao");
            break;
         case "3":
            routPath("filho-enteado");
            break;
         case "4":
            routPath("filho-enteado-uni-tec");
            break;
         case "5":
            routPath("irmao-neto-bis");
            break;
         case "6":
            routPath("irmao-neto-bis-uni");
            break;
         case "7":
            routPath("pais-avos-bisavos");
            break;
         case "8":
            routPath("menor-pobre-judicial");
            break;
         case "9":
            routPath("pessoa-incapaz");
            break;
         case "10":
            routPath("ex-conjuge");
            break;
         case "11":
            routPath("agregados-outros");
            break;
      }
   }

   function handleChangeTipoDependencia(event: SelectChangeEvent) {
      setTipoDependencia(event.target.value as string);
      console.log(tipoDependencia);
   }
   const navegate = useNavigate();

   return (
      <>
         <Toolbar
            sx={{
               backgroundColor: "#053",
               position: "sticky",
               top: "0",
               zIndex: "999",
            }}
         >
            <Typography variant="h6" color="#ddd" noWrap>
               BAGAGGIO
            </Typography>
         </Toolbar>
         <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
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
               <Typography variant="h4">Tipos de dependência</Typography>
               <TextField
                  sx={{ marginTop: "1rem" }}
                  required
                  id="cpfNumber"
                  name="cpfNumber"
                  label="Nome"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  style={{ marginBottom: "20px" }}
               />
               <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                     <InputLabel id="demo-simple-select-label">
                        Tipo de dependência
                     </InputLabel>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Tipo de dependência"
                        value={tipoDependencia}
                        onChange={handleChangeTipoDependencia}
                     >
                        <MenuItem value={1}>Cônjuge</MenuItem>
                        <MenuItem value={2}>
                           Companheiro(a) com o(a) qual tenha filho ou viva há
                           mais de 5 (cinco) anos ou possua declaração de união
                           estável
                        </MenuItem>
                        <MenuItem value={3}>Filho(a) ou entendeado(a)</MenuItem>
                        <MenuItem value={4}>
                           Filho(a) ou entendeado(a), universitário(a) ou
                           cursando escola técnica de 2° grau
                        </MenuItem>
                        <MenuItem value={5}>
                           Irmão(a), neto(a) ou bisneto(a) sem arrimo dos pais,
                           dos(a) qual detenha a guarda judicial
                        </MenuItem>
                        <MenuItem value={6}>
                           Irmão(a), neto(a) ou bisneto(a) sem arrimo dos pais,
                           universitário(a) ou cursando escola técnica de 2°
                           grau, dos(a) qual detenha a guarda judicial
                        </MenuItem>
                        <MenuItem value={7}>Pais, avós e bisavós</MenuItem>
                        <MenuItem value={8}>
                           Menor pobre do qual detenha a guarda judicial
                        </MenuItem>
                        <MenuItem value={9}>
                           Pessoa absolutamente incapaz, da qual seja tutor ou
                           curador
                        </MenuItem>
                        <MenuItem value={10}>Ex-cônjuge</MenuItem>
                        <MenuItem value={11}>Agregados/outros</MenuItem>
                     </Select>
                  </FormControl>
               </Box>
               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <Button
                     onClick={() => navegate(-1)}
                     variant="contained"
                     color="inherit"
                     style={{ marginTop: "10px", textAlign: "end" }}
                  >
                     VOLTAR
                  </Button>
                  <Button
                     onClick={handleSubmit}
                     variant="contained"
                     color="success"
                     style={{ marginTop: "10px", textAlign: "end" }}
                  >
                     ADICIONAR DEPENDENTE
                  </Button>
               </div>
            </Paper>
         </Container>
      </>
   );
};

export default TiposDependencia;
