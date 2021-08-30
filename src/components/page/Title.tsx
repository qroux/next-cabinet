import { Typography, useTheme } from "@material-ui/core";
import React from "react";

const Title = ({ label }: { label: string }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h5"
      align="center"
      style={{
        backgroundColor: theme.palette.secondary.main,
        padding: "0.5rem 0",
        // @ts-ignore
        color: theme.palette.text.light,
        marginBottom: "0.5rem",
      }}
    >
      {label}
    </Typography>
  );
};

export default Title;
