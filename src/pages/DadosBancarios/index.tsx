import React from "react";
import InputFile from "../../components/InputFile";
import { Button, Radio, Typography } from "@mui/material";
import InputsTextField from "../../components/InputsTextField";
import { ContentRadio, RadioContainer } from "./styles";

const DadosBancarios: React.FC = () => {
   const [comprovanteBancario, setComprovanteBancario] = React.useState<
      string | null
   >(null);

   const [agencia, setAgencia] = React.useState("");
   const [conta, setConta] = React.useState("");

   const [possuiConta, setPossuiConta] = React.useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPossuiConta(event.target.value);
   };

   
   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log(comprovanteBancario)
   }

   return (
      <>
         <Typography>
            Comprovante de conta bancária ativa (como extrato bancário,
            comprovante de pagamento ou print do internet bank)
         </Typography>
         <InputFile
            setPdfBase64={setComprovanteBancario}
            name="comprovanteBancario"
            titleDoc="Comprovante Bancario - PDF"
         />
         <Typography>Informações do documento</Typography>
         <InputsTextField
            inputLabel="Agência"
            inputValue={agencia}
            setInputValue={setAgencia}
         />
         <InputsTextField
            inputLabel="Conta"
            inputValue={conta}
            setInputValue={setConta}
         />
         <Typography sx={{ margin: "30px 0 20px 0" }}>
            Informações do documento
         </Typography>
         <p style={{ margin: "0 0 20px 0" }}>Você possui conta no banco Itaú?</p>
         <ContentRadio>
            <RadioContainer>
               <Radio
                  checked={possuiConta === "Sim"}
                  onChange={handleChange}
                  value="Sim"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Sim" }}
               />
               <label>Sim, irei apenas vincular ao CNPJ da empresa</label>
            </RadioContainer>
            <RadioContainer>
               <Radio
                  checked={possuiConta === "Não"}
                  onChange={handleChange}
                  value="Não"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Não" }}
               />
               <label>Não, irei abrir a conta, conforme orientação enviada por e-mail</label>
            </RadioContainer>
         </ContentRadio>

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

export default DadosBancarios;
