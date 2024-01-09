import {
   Box,
   FormControl,
   InputLabel,
   Select,
   SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface Props {
   children: React.ReactNode;
   label: string;
   selectValue: string;
   handleChange: (event: SelectChangeEvent) => void;
}

const SelectItems: React.FC<Props> = ({
   children,
   label,
   selectValue,
   handleChange
}) => {
   return (
      <>
         <Box sx={{ minWidth: 120, marginTop: "25px" }}>
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">{label}</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectValue}
                  label={label}
                  onChange={handleChange}
                  sx={{ width: "15.3rem" }}
               >
                  {children}
               </Select>
            </FormControl>
         </Box>
      </>
   );
};

export default SelectItems;
