import React from "react";
import InputFile from "../InputFile";
import { Typography } from "@mui/material";
import InputsTextField from "../InputsTextField";
import { rgFormatter } from "../../functions/mask";

const DepRG: React.FC = () => {
   const [rg, setRG] = React.useState<string | null>(null);
   const [nomePai, setNomePai] = React.useState("");
   const [nomeMae, setNomeMae] = React.useState("");
   const [numeroRG, setNumeroRG] = React.useState("");
   console.log(rg)
   return (
      <>
         <InputFile setPdfBase64={setRG} name="RG" titleDoc="RG - PDF" />
         <Typography>Informações do documento</Typography>
         <InputsTextField
            inputLabel="RG"
            inputValue={rgFormatter(numeroRG)}
            maxLen={12}
            setInputValue={setNumeroRG}
         />
         <InputsTextField
            inputLabel="Nome da mãe"
            inputValue={nomeMae}
            setInputValue={setNomeMae}
         />
         <InputsTextField
            inputLabel="Nome do pai"
            inputValue={nomePai}
            setInputValue={setNomePai}
         />
      </>
   );
};

export default DepRG;
