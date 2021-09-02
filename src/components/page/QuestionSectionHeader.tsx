import { Typography } from "@material-ui/core";
import React from "react";

const QuestionSectionHeader = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="h5"
      style={{ fontWeight: "bold", marginBottom: "2rem" }}
    >
      {title}
    </Typography>
  );
};

export default QuestionSectionHeader;
