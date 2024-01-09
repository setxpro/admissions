import React from "react";
import { TextField } from "@mui/material";
// import { Container } from './styles';

interface Props {
   setInputValue: React.Dispatch<React.SetStateAction<string>>;
   inputValue: string;
   maxLen?: number;
   inputLabel: string;
   newValue?: string;
}

const InputsTextField: React.FC<Props> = ({ setInputValue, maxLen, inputValue, inputLabel, newValue }) => {
   return (
      <TextField
         sx={{ margin: "1rem 0" }}
         required
         name="registroNumber"
         label={inputLabel}
         fullWidth
         autoComplete="given-name"
         variant="standard"
         value={newValue ? newValue : inputValue}
         inputProps={{ maxLength: maxLen }}
         onChange={(e) => setInputValue(e.target.value)}
      />
   );
};

export default InputsTextField;
