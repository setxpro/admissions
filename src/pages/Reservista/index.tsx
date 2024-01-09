import React from "react";
import InputFile from "../../components/InputFile";
import InputsTextField from "../../components/InputsTextField";
import SelectItems from "../../components/SelectItems";
import { Button, MenuItem, SelectChangeEvent } from "@mui/material";
import { uf } from "../../mock/uf";

const Reservista: React.FC = () => {
   const [certificadoReservista, setCertificadoReservista] = React.useState<
      string | null
   >(null);
   const [situacaoMilitar, setSituacaoMilitar] = React.useState("");
   const [RA, setRA] = React.useState("");
   const [categoriaMilitar, setCategoriaMilitar] = React.useState("");
   const [regiaoMilitar, setRegiaoMilitar] = React.useState("");
   const [orgaoExpeditor, setOrgaoExpeditor] = React.useState("");
   const [ufExpedicao, setUfExpedicao] = React.useState("");

   const handleChangeufNascimento = (event: SelectChangeEvent) => {
      setUfExpedicao(event.target.value as string);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         pdf: certificadoReservista,
         situacaoMilitar: situacaoMilitar,
         RA: RA,
         categoriaMilitar: categoriaMilitar,
         regiaoMilitar: regiaoMilitar,
         orgaoExpeditor: orgaoExpeditor,
         ufExpedicao: ufExpedicao
      })
   }


   return (
      <>
         <InputFile
            setPdfBase64={setCertificadoReservista}
            name="certificadoReservista"
            titleDoc="Certificado de Reservista ou Dispensa"
         />
         <InputsTextField
            inputLabel="Situação Militar"
            inputValue={situacaoMilitar}
            setInputValue={setSituacaoMilitar}
         />
         <InputsTextField
            inputLabel="Número do RA (Registro de Alistamento)"
            inputValue={RA}
            setInputValue={setRA}
         />
         <InputsTextField
            inputLabel="Categoria militar"
            inputValue={categoriaMilitar}
            setInputValue={setCategoriaMilitar}
         />
         <InputsTextField
            inputLabel="Região militar"
            inputValue={regiaoMilitar}
            setInputValue={setRegiaoMilitar}
         />
         <InputsTextField
            inputLabel="Órgão expedidor "
            inputValue={orgaoExpeditor}
            setInputValue={setOrgaoExpeditor}
         />
         <SelectItems
            label="UF de expedição"
            selectValue={ufExpedicao}
            handleChange={handleChangeufNascimento}
         >
            {uf.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>
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

export default Reservista;
