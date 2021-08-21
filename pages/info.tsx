import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/AnimatedPage";

const info = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="xl" style={{ paddingTop: "2rem" }}>
        <Typography variant="h4" align="left">
          les infos
        </Typography>
        <Divider />
      </Container>
    </AnimatedPage>
  );
};

export default info;
