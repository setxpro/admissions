import React from "react";
import { ContentRadio, RadioContainer } from "./styles";
import { Button, Radio, Typography } from "@mui/material";
import InputFile from "../../components/InputFile";

const Esocial: React.FC = () => {
   const [selectedValue, setSelectedValue] = React.useState("");
   const [esocial, setEsocial] = React.useState<string | null>(null);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log(esocial)
   }
   return (
      <>
         <InputFile
            setPdfBase64={setEsocial}
            name="esocial"
            titleDoc="Consulta eSocial - PDF"
         />
         <Typography style={{ marginBottom: "20px" }}>
            Informações do documento
         </Typography>
         <p>Declaro que eu fiz a validação do eSocial </p>
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

export default Esocial;
