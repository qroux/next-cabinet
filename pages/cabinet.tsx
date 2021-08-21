import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/AnimatedPage";

const cabinet = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="xl" style={{ paddingTop: "2rem" }}>
        <Typography variant="h4" align="left">
          Présentation du Cabinet
        </Typography>
        <Divider />
      </Container>
    </AnimatedPage>
  );
};

export default cabinet;
