import React, { useContext, useEffect } from "react";
import InputFile from "../../components/InputFile";
import InputsTextField from "../../components/InputsTextField";
import {
   Button,
   Container,
   MenuItem,
   Paper,
   SelectChangeEvent,
   Typography,
} from "@mui/material";
import SelectItems from "../../components/SelectItems";
import { uf } from "../../mock/uf";
// import BasicDatePicker from "../../components/DatePicker";
import { rgFormatter } from "../../functions/mask";
import { paises } from "../../mock/paises";


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { dateFormatter } from '../../functions/intlfFunctions';
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth";


type RgType = {
   candidateId: string;
   pdfRg: string;
   nomeCompleto: string;
   socialName: string;
   sexo: string;
   racaCor: string;
   estadoCivil: string;
   
   nacionalidade: string; // Baseado em País -- Brasil

   estadoNascimento: string; 
   cidadeNascimento: string;
   
   dataNascimento: Date;
   nomeDaMae: string;
   nomeDoPai: string;
   numRg: string;
   dataExpedicaoRg: Date;
   orgaoEmissorRg: string;
   ufEmissorRg: string;
}

const RG: React.FC = () => {

   const navigate = useNavigate()

   const [rg, setRG] = React.useState<string | null>(null);
   const [nome, setNome] = React.useState("");
   const [nomeSocial, setNomeSocial] = React.useState("");
   const [sexo, setSexo] = React.useState("");
   const [raca, setRaca] = React.useState("");
   const [estadoCivil, setEstadoCivil] = React.useState("");
   const [ufNascimento, setUfNascimento] = React.useState("");
   const [cidadeNascimento, setCidadeNascimento] = React.useState("");
   // const [date, setDate] = React.useState("");
   const [nomePai, setNomePai] = React.useState("");
   const [nomeMae, setNomeMae] = React.useState("");
   const [numeroRG, setNumeroRG] = React.useState("");
   // const [dataExpedicao, setDataExpedicao] = React.useState("");
   const [orgaoEmissor, setOrgaoEmissor] = React.useState("");
   const [ufEmissor, setUfEmissor] = React.useState("");
   const [pais, setPais] = React.useState("");

   const [dataNascimento, setDataNascimento] = useState(new Date());
   const [dataExpedicao, setDataExpedicao] = useState(new Date());

   const [rgRegistered, setRgRegistered] = React.useState<RgType | null>(null);

   const { createRg, findRg, updateRg } = useApi();
   const {user} = useContext(AuthContext)

   // DATE
   const handleDateNascimentoChange = (date: any) => {
      setDataNascimento(date);
   };

   const handleDateExpedicaoChange = (date: any) => {
      setDataExpedicao(date);
   };


   // const { createRg } = useApi();

   const handleChangeSexo = (event: SelectChangeEvent) => {
      setSexo(event.target.value as string);
   };

   const handleChangeRaca = (event: SelectChangeEvent) => {
      setRaca(event.target.value as string);
   };

   const handleChangeEstadoCivil = (event: SelectChangeEvent) => {
      setEstadoCivil(event.target.value as string);
   };


   const handleChangeufNascimento = (event: SelectChangeEvent) => {
      setUfNascimento(event.target.value as string);
   };

   const handleChangeUfEmissor = (event: SelectChangeEvent) => {
      setUfEmissor(event.target.value as string);
   };

   const handleChangePais = (event: SelectChangeEvent) => {
      setPais(event.target.value as string);
   };

   async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();


      if(rgRegistered !== null) {
         navigate("/candidate-register")
         return await updateRg(
            `${rg}`, 
            nome, 
            nomeSocial, 
            sexo, 
            raca, 
            estadoCivil, 
            pais, 
            ufNascimento, 
            cidadeNascimento, 
            dateFormatter(dataNascimento),
            nomeMae,
            nomePai,
            numeroRG,
            dateFormatter(dataExpedicao),
            orgaoEmissor,
            ufEmissor,
            `${user?._id}`
         )
      }

      navigate("/candidate-register")
      return await createRg(
         `${rg}`, 
         nome, 
         nomeSocial, 
         sexo, 
         raca, 
         estadoCivil, 
         pais, 
         ufNascimento, 
         cidadeNascimento, 
         dateFormatter(dataNascimento),
         nomeMae,
         nomePai,
         numeroRG,
         dateFormatter(dataExpedicao),
         orgaoEmissor,
         ufEmissor,
         `${user?._id}`
         )
      
   }

   useEffect(() => {
      (async () => {
         const data = await findRg(`${user?._id}`);
         setRgRegistered(data);
         setRG(data.pdfRg)
         setNome(data.nomeCompleto)
         setNomeSocial(data.socialName)
         setSexo(data.sexo)
         setRaca(data.racaCor)
         setEstadoCivil(data.estadoCivil)
         setPais(data.nacionalidade)
         
         setUfNascimento(data.estadoNascimento)
         setCidadeNascimento(data.cidadeNascimento)
         setNomePai(data.nomeDoPai)
         setNomeMae(data.nomeDaMae)
         setNumeroRG(data.numRg)
         setOrgaoEmissor(data.orgaoEmissorRg)
         setUfEmissor(data.ufEmissorRg)
      })()
   }, [user?._id])

   return (
      <Container component="main" maxWidth="lg" sx={{ height: '100%', padding: '1rem 1rem', display: 'flex', alignItems: 'center'}}>
         <Paper sx={{padding: '1rem', width: '100%'}}>
         <InputFile setPdfBase64={setRG} name="RG" titleDoc="RG - PDF" />
         <Typography style={{ marginTop: "25px", fontWeight: "600" }}>
            Informações do documento
         </Typography>
         <InputsTextField
            inputLabel="Nome completo"
            inputValue={nome}
            setInputValue={setNome}
         />
         <InputsTextField
            inputLabel="Nome social"
            inputValue={nomeSocial}
            setInputValue={setNomeSocial}
         />
         <p>
            De acordo com o Art. 1º do Decreto nº 8.727 de 2016, nome social é a
            designação pela qual a pessoa travesti ou transexual se identifica e
            é socialmente reconhecida.
         </p>

         <SelectItems
            label="Sexo"
            selectValue={sexo}
            handleChange={handleChangeSexo}
         >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="feminino">Feminino</MenuItem>
         </SelectItems>

         <SelectItems
            label="Raça"
            selectValue={raca}
            handleChange={handleChangeRaca}
         >
            <MenuItem value="branca">Branca</MenuItem>
            <MenuItem value="preta">Preta/Negra</MenuItem>
            <MenuItem value="amarela">Amarela</MenuItem>
            <MenuItem value="parda">Parda</MenuItem>
            <MenuItem value="indigena">Indígena</MenuItem>
            <MenuItem value="naoInformado">Não informado</MenuItem>
         </SelectItems>

         <SelectItems
            label="Estado civil"
            selectValue={estadoCivil}
            handleChange={handleChangeEstadoCivil}
         >
            <MenuItem value="solteiro">Solteiro(a)</MenuItem>
            <MenuItem value="casado">Casado(a)</MenuItem>
            <MenuItem value="separado">Separado(a)</MenuItem>
            <MenuItem value="divorciado">Divorciado(a)</MenuItem>
            <MenuItem value="viuvo">Viúvo(a)</MenuItem>
         </SelectItems>

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
            label="Estado onde nasceu"
            selectValue={ufNascimento}
            handleChange={handleChangeufNascimento}
         >
            {uf.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </SelectItems>


         <InputsTextField
            inputLabel="Cidade onde nasceu"
            inputValue={cidadeNascimento}
            setInputValue={setCidadeNascimento}
         />
      

      {/** component data */}
      <LocalizationProvider  dateAdapter={AdapterDateFns}>
       <DemoContainer components={['DatePicker']}>
         <DatePicker 
         label="Data de nascimento"
         value={dataNascimento}
         onChange={handleDateNascimentoChange}
         format="dd/MM/yyyy"
       />
       </DemoContainer>
     </LocalizationProvider>
      {/** component data */}


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
         <InputsTextField
            inputLabel="RG"
            inputValue={rgFormatter(numeroRG)}
            maxLen={12}
            setInputValue={setNumeroRG}
         />


         {/** component data */}
      <LocalizationProvider  dateAdapter={AdapterDateFns}>
       <DemoContainer components={['DatePicker']}>
         <DatePicker 
         label="Data de Expedição"
         value={dataExpedicao}
         onChange={handleDateExpedicaoChange}
         format="dd/MM/yyyy"
       />
       </DemoContainer>
     </LocalizationProvider>
      {/** component data */}


         <InputsTextField
            inputLabel="Orgão Emissor"
            inputValue={orgaoEmissor}
            setInputValue={setOrgaoEmissor}
            maxLen={60}
         />
         <SelectItems
            label="UF emissor"
            selectValue={ufEmissor}
            handleChange={handleChangeUfEmissor}
         >
            {uf.map((item, k) => (
               <MenuItem key={k} value={item}>{item}</MenuItem>
            ))}
         </SelectItems>
         <div style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center', gap: '1rem' }}>
               <Button onClick={() => navigate('/candidate-register')} variant="contained" color="inherit"style={{ marginTop: "10px", textAlign: "end" }}>VOLTAR</Button>
               <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color={rgRegistered !== null ? "warning" : "success"}
                  style={{ marginTop: "10px", textAlign: "end" }}
               >
                  {rgRegistered !== null ? "ATUALIZAR" : "SALVAR"}
               </Button>
            </div>
         </Paper>
      </Container>
   );
};

export default RG;
