import {  Button, Radio, TextField, Typography } from "@mui/material";
import { cpfFormatter, removeCpfFormat } from "../../functions/mask";
import React from "react";
import DateProps from "../../components/DatePicker";
import { ContentRadio, RadioContainer, Container } from "./styles";

const DadosDependente: React.FC = () => {
   const [cpfNumber, setCpfNumber] = React.useState<string>("");
   const [nomeDependente, setNomeDependente] = React.useState("");
   const [dateNascimento, setDateNascimento] = React.useState("");
   const [localNascimento, setLocalNascimento] = React.useState("");

   const [selectedValue, setSelectedValue] = React.useState("");
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
   };

   function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault()
      console.log(dateNascimento)
      console.log(removeCpfFormat(cpfNumber))
   }
   return (
      <Container>
         <Typography>Informações do documento</Typography>
         Por favor, revise cuidadosamente todas as informações.
         <p></p>
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
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="nomeDependente"
            name="nomeDependente"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={nomeDependente}
            inputProps={{ maxLength: 14 }}
            onChange={(e) => setNomeDependente(e.target.value)}
         />
         <div style={{ marginTop: "20px" }}>
            <DateProps
               title="Data de nascimento"
               setValue={setDateNascimento}
            />
         </div>
         <p style={{ margin: "20px 0 5px 0" }}>Possui deficiência?</p>
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
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="localNascimento"
            name="localNascimento"
            label="Local de nascimento"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={localNascimento}
            onChange={(e) => setLocalNascimento(e.target.value)}
         />
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
      </Container>
   );
};

export default DadosDependente;
