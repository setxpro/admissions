import React, { useContext, useEffect, useState } from "react";
import InputFile from "../../components/InputFile";
import InputsTextField from "../../components/InputsTextField";
import BasicDatePicker from "../../components/DatePicker";
import { uf } from "../../mock/uf";
import {
   Button,
   Container,
   MenuItem,
   Paper,
   SelectChangeEvent,
} from "@mui/material";
import SelectItems from "../../components/SelectItems";

import { removeNotNumbersFormatter } from "../../functions/mask";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

type Ctps = {
   pdfCarteira: string;
   numCarteira: string;
   numSerieCarteira: string;
   dataEmissao: string;
   ufEmissorCarteira: string;
};

const CTPS: React.FC = () => {
   const { createCtps, findCtps, updateCtps } = useApi();
   const { user } = useContext(AuthContext);
   const [ctps, setCTPS] = React.useState<string | null>(null);
   

   const [numeroCarteira, setNumeroCarteira] = React.useState("");
   const [serieCarteira, setSerieCarteira] = React.useState("");
   const [dataEmissao, setDataEmissao] = React.useState("");
   const [ufEmissor, setUfEmissor] = React.useState("");
   const [ctpsRegistered, setCtpsRegistered] = React.useState<Ctps | null>(
      null
   );
   const navigate = useNavigate();

   const [pdfName, setPdfName] = useState("");

   async function handleSubmit(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) {
      e.preventDefault();
      if (!numeroCarteira) {
         return toast.warning(
            "Insira um valor válido para o número da carteira de trabalho"
         );
      }
      if (!serieCarteira) {
         return toast.warning(
            "Insira um valor válido para a série da carteira de trabalho"
         );
      }
      if (!ufEmissor) {
         return toast.warning("Insira uma UF");
      }

      const [dia, mes, ano] = dataEmissao.split("/");
      const dataReformatada = new Date(`${ano}-${mes}-${dia}`);

      const pdfN = `${user?.name}_${user?.middlename}_ctps.pdf`

      if (ctpsRegistered !== null) {
         navigate("/candidate-register")
         return await updateCtps(`${user?._id}`, ctps as string, pdfN, numeroCarteira, serieCarteira, dataReformatada, ufEmissor)
      }

      createCtps(`${user?._id}`, ctps as string, pdfN, numeroCarteira, serieCarteira, dataReformatada, ufEmissor)
         navigate("/candidate-register")
   }

   useEffect(() => {
      (async () => {
         const data = await findCtps(`${user?._id}`);
         if (data !== null) {
            setCtpsRegistered(data);
            setCTPS(data.pdfCarteira)
            setNumeroCarteira(data.numCarteira);
            setSerieCarteira(data.numSerieCarteira);
            setUfEmissor(data.ufEmissorCarteira);
            setPdfName(data.pdfCtpsName)
         }
      })();
   }, [user?._id]);

   const handleChange = (event: SelectChangeEvent) => {
      setUfEmissor(event.target.value as string);
   };

   return (
      <Container
         component="main"
         maxWidth="lg"
         sx={{
            height: "calc(100vh - 70px)",
            display: "flex",
            alignItems: "center",
         }}
      >
         <Paper sx={{ padding: "1rem", width: "100%" }}>
            {pdfName}
            <InputFile
               setPdfBase64={setCTPS}
               name="frenteCNH"
               titleDoc="Carteira de Trabalho (frente e verso) - PDF"
            />
            <InputsTextField
               inputLabel="Número da Carteira de Trabalho (CTPS)"
               inputValue={removeNotNumbersFormatter(numeroCarteira)}
               setInputValue={setNumeroCarteira}
            />
            <InputsTextField
               inputLabel="Série da Carteira de Trabalho (CTPS)"
               inputValue={serieCarteira}
               setInputValue={setSerieCarteira}
            />
            <BasicDatePicker
               setValue={setDataEmissao}
               dataInfo={new Date(`${ctpsRegistered?.dataEmissao}`)}
               title="Data de emissão"
            />

            <SelectItems
               label="UF emissor"
               selectValue={ufEmissor}
               handleChange={handleChange}
               children={uf.map((value, index) => (
                  <MenuItem key={index} id="menuUF" value={index}>
                     {value}
                  </MenuItem>
               ))}
            />
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
                  color={ctpsRegistered !== null ? "warning" : "success"}
                  style={{ marginTop: "10px", textAlign: "end" }}
               >
                  {ctpsRegistered !== null ? "ATUALIZAR" : "SALVAR"}
               </Button>
            </div>
         </Paper>
      </Container>
   );
};

export default CTPS;
