import { Button, Typography } from "@mui/material";
import React from "react";
import InputFile from "../../components/InputFile";

const CertidaoNascimento: React.FC = () => {
   const [certidaoNascimentoDoc, setCertidaoNascimentoDoc] = React.useState<
      string | null
   >(null);
   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log(certidaoNascimentoDoc)
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
            setPdfBase64={setCertidaoNascimentoDoc}
            name="certidaoNascimentoDoc"
            titleDoc="Certidão de Nascimento - PDF"
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

export default CertidaoNascimento;
