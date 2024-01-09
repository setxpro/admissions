import { Grid, Typography } from "@mui/material";
import React from "react";
import { CheckIcon, DocIcon, UploadIcon } from "../icons";
import { Container, ContentAreaInput, ContentFormArea } from "./styles";

// import { Container } from './styles';

interface InputProps {
   setPdfBase64: React.Dispatch<React.SetStateAction<string | null>>;
   name: string;
   titleDoc: string;
   haveCtpsPdf?: string;
}

const InputFile: React.FC<InputProps> = ({ setPdfBase64, name, titleDoc, haveCtpsPdf }) => {
   const [typeFile, setTypeFile] = React.useState("");
   const [fileName, setFileName] = React.useState("");

   const inputRef = React.useRef<any>();

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
         setTypeFile(file.type);
         setFileName(file.name);
         const reader = new FileReader();

         reader.onload = () => {
            const pdfData = reader.result as string; // O tipo de resultado é 'string' para dados em Base64
            setPdfBase64(pdfData);
         };

         reader.readAsDataURL(file);

      }
   };

   console.log(typeFile)

   // console.log(typeFile.replace("image/", "")); // extension file

   console.log(`${inputRef.current && inputRef.current.name}`);
   // console.log(pdfBase64);

   return (
      <Container>
         
         {/** children */}
         <>
         <Grid container spacing={3} sx={{ marginTop: ".2rem" }}>
            <Grid item xs={12} sm={6}>
               <Typography>{titleDoc}</Typography>
               <ContentFormArea
               >
                  <ContentAreaInput>
                     <input
                        type="file"
                        name={name}
                        accept=".pdf"
                        required
                        id="field-file"
                        onChange={handleFileChange}
                        ref={inputRef}
                     />
                     {fileName ? <CheckIcon /> : <UploadIcon />}

                     <div style={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "1em" }}>
                           {!fileName
                              ? "Click aqui ou arraste um arquivo"
                              : "Click aqui para substituir"}
                        </Typography>
                     </div>
                  </ContentAreaInput>
                  {fileName && (
                     <div id="box">
                        <DocIcon />
                        <p>{fileName}</p>
                     </div>
                  )}
               </ContentFormArea>
            </Grid>
         </Grid>
         </>
      </Container>
   );
};

export default InputFile;
