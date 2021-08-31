import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/page/AnimatedPage";
import Title from "../src/components/page/Title";

const soins = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="xl" style={{ paddingTop: "1rem" }}>
        <Title label="Les soins" />
      </Container>
    </AnimatedPage>
  );
};

export default soins;
