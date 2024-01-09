import React from "react";
import InputFile from "../../components/InputFile";
import { ContentRadio, RadioContainer } from "../ConsultaCPF/styles";
import { Button, Radio } from "@mui/material";

const CartaoPassagem: React.FC = () => {
   const [cartaoPassagem, setCartaoPassagem] = React.useState<string | null>(
      null
   );

   const [selectedValuePossui, setSelectedValuePossui] = React.useState("");
   const handleChangePossui = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValuePossui(event.target.value);
   };

   const [selectedValueDisponivel, setSelectedValueDisponivel] = React.useState("");
   const handleChangeDisponivel = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValueDisponivel(event.target.value);
   };

   function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      console.log({
         cartaoPassagem
      })
   }

   return (
      <>
         <InputFile
            setPdfBase64={setCartaoPassagem}
            name="CartaoPassagem"
            titleDoc="Cópia do cartão de passagem - PDF"
         />
         <p style={{ margin: "20px 0 10px 0" }}>Você possui Bilhete Único?</p>
         <ContentRadio>
            <RadioContainer>
               <Radio
                  checked={selectedValuePossui === "Sim"}
                  onChange={handleChangePossui}
                  value="Sim"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Sim" }}
               />
               <label>Sim</label>
            </RadioContainer>
            <RadioContainer>
               <Radio
                  checked={selectedValuePossui === "Não"}
                  onChange={handleChangePossui}
                  value="Não"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Não" }}
               />
               <label>Não</label>
            </RadioContainer>
         </ContentRadio>
         <p style={{ margin: "20px 0 10px 0" }}>Seu Bilhete Único está disponível?</p>
         <ContentRadio>
            <RadioContainer>
               <Radio
                  checked={selectedValueDisponivel === "Sim"}
                  onChange={handleChangeDisponivel}
                  value="Sim"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Sim" }}
               />
               <label>Sim</label>
            </RadioContainer>
            <RadioContainer>
               <Radio
                  checked={selectedValueDisponivel === "Não"}
                  onChange={handleChangeDisponivel}
                  value="Não"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Não" }}
               />
               <label>Não</label>
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

export default CartaoPassagem;
