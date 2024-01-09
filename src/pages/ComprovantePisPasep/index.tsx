import React from "react";
import InputFile from "../../components/InputFile";
import InputsTextField from "../../components/InputsTextField";
import { Button } from "@mui/material";

const ComprovantePisPasep: React.FC = () => {
   const [pisPasep, setPisPasep] = React.useState<string | null>(null);
   const [numeroPisPasep, setNumeroPisPasep] = React.useState("");

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         pisPasep: pisPasep,
         numeroPisPasep: numeroPisPasep
      })
   }
   return (
      <>
         <InputFile
            setPdfBase64={setPisPasep}
            name="pisPasep"
            titleDoc="Comprovante PIS/Pasep - PDF"
         />
         <InputsTextField
            inputLabel="Número do PIS/PASEP"
            inputValue={numeroPisPasep}
            setInputValue={setNumeroPisPasep}
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

export default ComprovantePisPasep;
