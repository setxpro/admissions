import React from "react";
import { ContentRadio, DescriptionArea, RadioContainer } from "./styles";
import { Button, Radio, TextField, Typography } from "@mui/material";

const ValeTransporte: React.FC = () => {
   const [selectedValue, setSelectedValue] = React.useState("");
   const [textValue, setTextValue] = React.useState("");
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
   };
   return (
      <>
         <Typography sx={{ margin: "30px 0 20px 0" }}>
            Informações do documento
         </Typography>
         <p style={{ margin: "0 0 20px 0" }}>Você possui cartão de passagem?</p>
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
         <DescriptionArea>
            <p id="description">
               Descrever abaixo os valores de utilização diária. Ex: IDA - 4,50
               (565 - GÁVEA); VOLTA 4,50 (BRT - 878)
            </p>
         </DescriptionArea>
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            disabled={selectedValue === "Não"}
            id="cpfNumber"
            name="cpfNumber"
            label="Transportes"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={textValue}
            inputProps={{ maxLength: 14 }}
            onChange={(e) => setTextValue(e.target.value)}
         />
         <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
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

export default ValeTransporte;
