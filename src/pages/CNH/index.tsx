import {
   Box,
   Checkbox,
   Container,
   FormControl,
   FormControlLabel,
   FormGroup,
   InputLabel,
   MenuItem,
   Paper,
   Select,
   SelectChangeEvent,
   Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import InputFile from "../../components/InputFile";
import { registroFormatter } from "../../functions/mask";
import DateProps from "../../components/DatePicker";

import { uf } from "../../mock/uf";
import { orgao } from "../../mock/orgao";
import InputsTextField from "../../components/InputsTextField";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type CnhType = {
   temCnh: boolean;
   pdfCnh?: string;
   categoriaCnh?: string;
   numeroRegistroCnh?: string;
   dataPrimeiraCnh?: Date;
   orgaoEmissorCnh?: string;
   ufOrgaoEmissorCnh?: string;
   dataEmissaoCnh?: Date;
   dataValidadeCnh?: Date;
};

const CNH: React.FC = () => {
   const { createCnh, findCnh, updateCnh } = useApi();
   const { user } = useContext(AuthContext);

   const [checked, setChecked] = useState(false);
   const [cnh, setCNH] = React.useState<string | null>(null);
   const [registro, setRegistro] = React.useState("");
   const [tipoCarteira, setTipoCarteira] = React.useState("");
   const [ufEmissor, setUfEmissor] = React.useState("");
   const [orgaoEmissor, setOrgaoEmissor] = React.useState("");
   const [dateHabilitacao, setDateHabilitacao] = React.useState("");
   const [dateEmissao, setDateEmissao] = React.useState("");
   const [dateValidade, setDateValidade] = React.useState("");
   const [cnhRegistered, setCnhRegistered] = React.useState<CnhType | null>(
      null
   );

   const navigate = useNavigate();

   const handleChange = (event: SelectChangeEvent) => {
      setTipoCarteira(event.target.value as string);
   };

   const handleChangeOrgaoEmissor = (event: SelectChangeEvent) => {
      setOrgaoEmissor(event.target.value as string);
   };

   async function handleSubmit(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) {
      e.preventDefault();

      const uff = uf[Number(ufEmissor)];
      const orgaoEm = orgao[Number(orgaoEmissor)];

      if (cnhRegistered !== null) {
         if (!cnh && !orgaoEm) {
            return toast.error("Insira o PDF da sua CNH novamente.");
         }
         navigate("/candidate-register")
         return await updateCnh(
            `${user?._id}`,
            !checked,
            cnh as string,
            tipoCarteira,
            registro,
            dateHabilitacao,
            orgaoEm,
            uff,
            dateEmissao,
            dateValidade
         );
      }
      navigate("/candidate-register")
      return await createCnh(
         `${user?._id}`,
         !checked,
         cnh as string,
         tipoCarteira,
         registro,
         dateHabilitacao,
         orgaoEm,
         uff,
         dateEmissao,
         dateValidade
      );
   }
   function handleChangeCheck(event: React.ChangeEvent<HTMLInputElement>) {
      setChecked(event.target.checked);
   }

   function handleChangeUf(event: SelectChangeEvent) {
      setUfEmissor(event.target.value);
   }

   useEffect(() => {
      (async () => {
         const find = await findCnh(`${user?._id}`);
         setCnhRegistered(find); 
         setChecked(!find.temCnh);
         setCNH(find.pdfCnh);
         setRegistro(find.numeroRegistroCnh);
         setTipoCarteira(find.categoriaCnh);
         setUfEmissor(find.ufOrgaoEmissorCnh);
         setOrgaoEmissor(find.orgaoEmissorCnh);


         setDateHabilitacao(find.temCnh);
         setDateEmissao(find.temCnh);
         setDateValidade(find.temCnh);

      })();
   }, [user?._id]);

   return (
      <>
         <Container
            component="main"
            maxWidth="lg"
            sx={{
               height: "100%",
               display: "flex",
               alignItems: "center",
               padding: "1rem 1rem",
            }}
         >
            <Paper sx={{ padding: "1rem", width: "100%" }}>
               <Typography>Não possui CNH? Marque abaixo:</Typography>
               <FormGroup>
                  <FormControlLabel
                     required
                     control={
                        <Checkbox
                           checked={checked}
                           onChange={handleChangeCheck}
                        />
                     }
                     label="Eu não possuo CNH"
                  />
               </FormGroup>
               {checked && (
                  <div
                     style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "1rem",
                     }}
                  >
                     <Button
                        onClick={() => navigate("/candidate-register")}
                        variant="contained"
                        color="inherit"
                        style={{ marginTop: "10px", textAlign: "end" }}
                     >
                        VOLTAR
                     </Button>
                     <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color={cnhRegistered !== null ? "warning" : "success"}
                        style={{ marginTop: "10px", textAlign: "end" }}
                     >
                        {cnhRegistered !== null ? "ATUALIZAR" : "SALVAR"}
                        SALVAR
                     </Button>
                  </div>
               )}
               {!checked && (
                  <>
                     <p style={{ marginTop: "10px" }}>
                        Frente e verso da Carteira Nacional de Habilitação
                     </p>
                     <InputFile
                        setPdfBase64={setCNH}
                        name="CNH"
                        titleDoc="CNH frente e verso- PDF"
                     />
                     <Box sx={{ minWidth: 120, marginTop: "25px" }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">
                              Categoria da CNH
                           </InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={tipoCarteira}
                              label="Categoria da CNH"
                              onChange={handleChange}
                           >
                              <MenuItem value={"ACC"}>ACC</MenuItem>
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={"C"}>C</MenuItem>
                              <MenuItem value={"D"}>D</MenuItem>
                              <MenuItem value={"E"}>E</MenuItem>
                              <MenuItem value={"AB"}>AB</MenuItem>
                              <MenuItem value={"AC"}>AC</MenuItem>
                              <MenuItem value={"AD"}>AD</MenuItem>
                              <MenuItem value={"AE"}>AE</MenuItem>
                           </Select>
                        </FormControl>
                     </Box>

                     <InputsTextField
                        inputValue={registroFormatter(registro)}
                        setInputValue={setRegistro}
                        maxLen={11}
                        inputLabel="Registro"
                     />

                     <div style={{ marginTop: "20px" }}>
                        <DateProps
                           title="Data da 1° habilitação"
                           setValue={setDateHabilitacao}
                        />
                     </div>

                     <Box sx={{ marginTop: "25px" }}>
                        <FormControl>
                           <InputLabel id="demo-simple-select-label">
                              Orgão emissor
                           </InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={orgaoEmissor}
                              label="Orgão Emissor"
                              onChange={handleChangeOrgaoEmissor}
                              sx={{ width: "15.3rem" }}
                           >
                              {orgao.map((value, index) => (
                                 <MenuItem
                                    key={index}
                                    id="menuOrgao"
                                    value={index}
                                 >
                                    {value}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>
                     </Box>

                     <Box sx={{ minWidth: 120, marginTop: "25px" }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">
                              UF emissor
                           </InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={ufEmissor}
                              label="UF emissor"
                              onChange={handleChangeUf}
                              sx={{ width: "15.3rem" }}
                           >
                              {uf.map((value, index) => (
                                 <MenuItem
                                    key={index}
                                    id="menuUF"
                                    value={index}
                                 >
                                    {value}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>
                     </Box>
                     <div style={{ marginTop: "20px" }}>
                        <DateProps
                           title="Data de emissão"
                           setValue={setDateEmissao}
                        />
                     </div>
                     <div style={{ marginTop: "20px" }}>
                        <DateProps
                           title="Validade"
                           setValue={setDateValidade}
                        />
                     </div>

                     <div
                        style={{
                           display: "flex",
                           justifyContent: "flex-end",
                           alignItems: "center",
                           gap: "1rem",
                        }}
                     >
                        <Button
                           onClick={() => navigate("/candidate-register")}
                           variant="contained"
                           color="inherit"
                           style={{ marginTop: "10px", textAlign: "end" }}
                        >
                           VOLTAR
                        </Button>
                        <Button
                           onClick={handleSubmit}
                           variant="contained"
                           color={
                              cnhRegistered !== null ? "warning" : "success"
                           }
                           style={{ marginTop: "10px", textAlign: "end" }}
                        >
                           {cnhRegistered !== null ? "ATUALIZAR" : "SALVAR"}
                        </Button>
                     </div>
                  </>
               )}
            </Paper>
         </Container>
      </>
   );
};

export default CNH;
