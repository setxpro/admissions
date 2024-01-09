import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CheckedStepIcon } from "../../styles/icons";

interface SimpleAccordionProps {
   title: string;
   children: JSX.Element;
   step?: number[];
   id?: number;
}
const SimpleAccordion: React.FC<SimpleAccordionProps> = ({
   title,
   children,
   step,
   id,
}) => {
   const accordionStyle = {
      marginTop: "20px",
   };

   return (
      <Accordion style={accordionStyle}>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
         >
            <Typography>{title}</Typography>
            {id && step ? step.includes(id) && <CheckedStepIcon /> : <></>}
         </AccordionSummary>
         <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
   );
};

export default SimpleAccordion;
