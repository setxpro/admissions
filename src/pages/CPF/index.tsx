import React, { useContext, useEffect } from "react";
import InputFile from "../../components/InputFile";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { cpfFormatter, removeCpfFormat } from "../../functions/mask";
import { validarCPF } from "../../functions/validations";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

type CpfType = {
   pdfCpf: string;
   numCpf: string;
}

const CPF = () => {
   const [cpf, setCpf] = React.useState<string | null>(null);
   const [cpfNumber, setCpfNumber] = React.useState<string>("");
   const { createCpf, findCpf, updateCpf } = useApi();
   const { user } = useContext(AuthContext)
   const navigate = useNavigate()
   const [cpfRegistered, setCpfRegistered] = React.useState<CpfType | null>(null);

   async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      const checkCpf = validarCPF(removeCpfFormat(cpfNumber));

      if (!checkCpf) {
         return toast.error("CPF inválido.");
      }


      if (checkCpf) {

         if (cpfRegistered !== null) {
            navigate('/candidate-register');
            return await updateCpf(`${cpf}`, removeCpfFormat(cpfNumber), user?._id as string)
         }

         navigate('/candidate-register');
         return await createCpf(`${cpf}`, removeCpfFormat(cpfNumber), user?._id as string)
      }
   }

   // Check if cpf exists
   useEffect(() => {
      (async () => {
         const cpfExists = await findCpf(`${user?._id}`);
         setCpfRegistered(cpfExists);
         if(cpfExists != null) {
            setCpf(cpfExists.pdfCpf)
            setCpfNumber(cpfExists.numCpf)
         }
      })()

   }, [user?._id])

   return (
      <Container component="main" maxWidth="lg" sx={{ height: 'calc(100vh - 70px)', display: 'flex', alignItems: 'center'}}>
         <Paper sx={{padding: '1rem', width: '100%'}}>
            <Typography variant="h6" gutterBottom>
               Arquivo deve ser enviado no formato PDF.
            </Typography>
            <Typography>
               <a
                  href="https://www.youpdf.com/br/"
                  target="_blanc"
                  rel="noopener noreferrer"
               >
                  Conversor de imagens para PDF.
               </a>
            </Typography>
            <InputFile setPdfBase64={setCpf} name="cpf" titleDoc="CPF - PDF" />

            <TextField
               sx={{ marginTop: "1rem" }}
               required
               id="cpfNumber"
               name="cpfNumber"
               label="CPF"
               fullWidth
               autoComplete="given-name"
               variant="standard"
               value={cpfFormatter(cpfNumber)}
               inputProps={{ maxLength: 14 }}
               onChange={(e) => setCpfNumber(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center', gap: '1rem' }}>
               <Button onClick={() => navigate('/candidate-register')} variant="contained" color="inherit"style={{ marginTop: "10px", textAlign: "end" }}>VOLTAR</Button>
               <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color={cpfRegistered !== null ? "warning" : "success"}
                  style={{ marginTop: "10px", textAlign: "end" }}
               >
                  {cpfRegistered !== null ? "ATUALIZAR" : "SALVAR"}
               </Button>
            </div>
         </Paper>
      </Container>
   );
};

export default CPF;
