import { Button, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import InputFile from "../../components/InputFile";
import SelectItems from "../../components/SelectItems";
import { mockTipoLocalidade } from "../../mock/tipoResidencia";
import { paises } from "../../mock/paises";
import { uf } from "../../mock/uf";
import InputsTextField from "../../components/InputsTextField";

const ComprovanteResidencia: React.FC = () => {
   const [comprovanteResidencia, setComprovanteResidencia] = React.useState<
      string | null
   >(null);
   const [tipoLocalidade, setTipoLocalidade] = React.useState("");
   const [logradouro, setLogradouro] = React.useState("");
   const [numeroLogradouro, setNumeroLogradouro] = React.useState("");
   const [complementoLogradouro, setComplementoLogradouro] = React.useState("");
   const [bairroLogradouro, setBairroLogradouro] = React.useState("");
   const [pais, setPais] = React.useState("");
   const [estado, setEstado] = React.useState("");
   const [cidade, setCidade] = React.useState("");
   const [CEP, setCEP] = React.useState("");

   const handleChangeTipoLocalidade = (event: SelectChangeEvent) => {
      setTipoLocalidade(event.target.value as string);
   };
   const handleChangePais = (event: SelectChangeEvent) => {
      setPais(event.target.value as string);
   };
   const handleChangeEstado = (event: SelectChangeEvent) => {
      setEstado(event.target.value as string);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      //setLogradouro(""); // OBS.: Não recebe parametro ?
      console.log({
         pdf: comprovanteResidencia,
         tipoLocalidade: tipoLocalidade,
         logradouro:logradouro, 
         numeroLogradouro:numeroLogradouro, 
         complementoLogradouro:complementoLogradouro, 
         bairroLogradouro:bairroLogradouro, 
         pais:pais, 
         estado:estado, 
         cidade:cidade, 
         CEP:CEP
      })
   }

   return (
      <>
         <InputFile
            setPdfBase64={setComprovanteResidencia}
            name="ComprovanteResidencia"
            titleDoc="Comprovante residência - PDF"
         />
         <SelectItems
            label="Tipo"
            selectValue={tipoLocalidade}
            handleChange={handleChangeTipoLocalidade}
         >
            {mockTipoLocalidade.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>
         <InputsTextField
            inputLabel="Logradouro (ex: nome da rua) "
            inputValue={logradouro}
            setInputValue={setLogradouro}
         />
         <InputsTextField
            inputLabel="Número"
            inputValue={numeroLogradouro}
            setInputValue={setNumeroLogradouro}
         />
         <InputsTextField
            inputLabel="Complemento"
            inputValue={complementoLogradouro}
            setInputValue={setComplementoLogradouro}
         />
         <InputsTextField
            inputLabel="Bairro"
            inputValue={bairroLogradouro}
            setInputValue={setBairroLogradouro}
         />
         <SelectItems
            label="País"
            selectValue={pais}
            handleChange={handleChangePais}
         >
            {paises.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>

         <SelectItems
            label="Estado"
            selectValue={estado}
            handleChange={handleChangeEstado}
         >
            {uf.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>
         <InputsTextField
            inputLabel="Cidade"
            inputValue={cidade}
            setInputValue={setCidade}
         />
         <InputsTextField
            inputLabel="CEP"
            inputValue={CEP}
            setInputValue={setCEP}
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

export default ComprovanteResidencia;
