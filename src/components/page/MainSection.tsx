import { Typography } from "@material-ui/core";
import React from "react";

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ marginBottom: "5rem" }}>{children}</div>;
};

export default MainSection;
