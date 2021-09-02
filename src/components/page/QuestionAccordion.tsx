import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const QuestionAccordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Accordion style={{ backgroundColor: "transparent" }} elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon style={{}} />}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionAccordion;
