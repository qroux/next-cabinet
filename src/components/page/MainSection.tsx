import { Typography } from "@material-ui/core";
import React from "react";

const MainSection = ({ body }: { body: any }) => {
  console.log(body);
  return (
    <Typography
      variant="body1"
      dangerouslySetInnerHTML={{ __html: body }}
      style={{ marginBottom: "5rem" }}
    />
  );
};

export default MainSection;
