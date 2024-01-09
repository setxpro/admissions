import React from "react";
import InputFile from "../InputFile";
import { Button } from "@mui/material";

interface Props{
   title:string
}

const PlainFileInput: React.FC<Props> = ({title}) => {
   const [file, setFile] = React.useState<string | null>(null);

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         file
      })
   }
   const titleDoc = title + " - PDF"
   return (
      <>
         <InputFile
            setPdfBase64={setFile}
            name="CertidaoCasamento"
            titleDoc={titleDoc}
         />
         <div
            style={{
               display: "flex",
               justifyContent: "flex-end",
               
            }}
         >
            <Button
               onClick={handleSubmit}
               variant="contained"
               color="success"
               style={{ marginTop: "10px", textAlign: "end" }}
            >
               SALVAR DEPENDENTE
            </Button>
         </div>
      </>
   );
};

export default PlainFileInput;
