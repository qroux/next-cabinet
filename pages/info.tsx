import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/AnimatedPage";

const info = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="xl" style={{ paddingTop: "5rem" }}>
        <Typography variant="h3" align="justify">
          les infos
        </Typography>
        <Divider />
      </Container>
    </AnimatedPage>
  );
};

export default info;
