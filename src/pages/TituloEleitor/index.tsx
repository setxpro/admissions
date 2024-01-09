import React from "react";
import InputFile from "../../components/InputFile";
import { Button, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import SelectItems from "../../components/SelectItems";
import { uf } from "../../mock/uf";

const TituloEleitor: React.FC = () => {
   const [titloEleitor, setTitloEleitor] = React.useState<string | null>(null);
   const [numero, setNumero] = React.useState("");
   const [zona, setZona] = React.useState("");
   const [secao, setSecao] = React.useState("");
   const [ufNascimento, setUfNascimento] = React.useState("");
   const [cidadeVotacao, setCidadeVotacao] = React.useState("");

   const handleChangeUfNascimento = (event: SelectChangeEvent) => {
      setUfNascimento(event.target.value as string);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         titloEleitor:titloEleitor,
         numero:numero,
         zona:zona,
         secao: secao,
         ufNascimento: ufNascimento,
         cidadeVotacao:cidadeVotacao,
      });
   }
   return (
      <>
         <InputFile
            setPdfBase64={setTitloEleitor}
            name="tituloEleitor"
            titleDoc="Título de eleitor - PDF"
         />
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="numeroTituloEleitor"
            name="numeroTituloEleitor"
            label="Número"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={numero}
            inputProps={{ maxLength: 14 }}
            onChange={(e) => setNumero(e.target.value)}
         />
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="numeroTituloEleitor"
            name="numeroTituloEleitor"
            label="Zona"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={zona}
            inputProps={{ maxLength: 14 }}
            onChange={(e) => setZona(e.target.value)}
         />
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="numeroTituloEleitor"
            name="numeroTituloEleitor"
            label="Seção"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={secao}
            inputProps={{ maxLength: 14 }}
            onChange={(e) => setSecao(e.target.value)}
         />
         <SelectItems
            label="UF emissor"
            selectValue={ufNascimento}
            handleChange={handleChangeUfNascimento}
         >
            {uf.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>
         <TextField
            sx={{ marginTop: "1rem" }}
            required
            id="numeroTituloEleitor"
            name="numeroTituloEleitor"
            label="Cidade de votação"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={cidadeVotacao}
            inputProps={{ maxLength: 30 }}
            onChange={(e) => setCidadeVotacao(e.target.value)}
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
      </>
   );
};

export default TituloEleitor;
