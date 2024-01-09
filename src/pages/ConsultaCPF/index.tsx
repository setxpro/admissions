import React from "react";
import InputFile from "../../components/InputFile";
import { Button, Radio, Typography } from "@mui/material";
import { ContentRadio, RadioContainer } from "./styles";

// import { Container } from './styles';

const ConsultaCPF: React.FC = () => {
   const [consultaCpf, setConsultaCpf] = React.useState<string | null>(null);
   const [selectedValue, setSelectedValue] = React.useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         selectedValue,
         consultaCpf
      })
   }

   return (
      <>
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
         <InputFile
            setPdfBase64={setConsultaCpf}
            name="cpf"
            titleDoc="Consulta PDF - PDF"
         />
         <Typography sx={{ margin: '30px 0 20px 0',}}>Informações do documento</Typography>
         <p style={{margin: '0 0 20px 0'}}>Está regular ?</p>
         <ContentRadio>
            <RadioContainer>
               <Radio
                  checked={selectedValue === "Sim"}
                  onChange={handleChange}
                  value="Sim"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Sim" }}
               />
               <label>Sim</label>
            </RadioContainer>
            <RadioContainer>
            <Radio
               checked={selectedValue === "Não"}
               onChange={handleChange}
               value="Não"
               name="radio-buttons"
               inputProps={{ "aria-label": "Não" }}
            />
            <label>Não</label>
            </RadioContainer>
         </ContentRadio>

         <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
               onClick={handleSubmit}
               variant="contained"
               color="success"
               style={{ marginTop: "10px", textAlign: "end" }}
            >
               SALVAR
            </Button>
         </div>
      </>
   );
};

export default ConsultaCPF;
