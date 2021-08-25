import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/AnimatedPage";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const cabinet = () => {
  const theme = useTheme();
  const pictures = [
    { label: "Poste de Chirurgie", path: "/fauteuil2-1.jpg" },
    { label: "Poste de Chirurgie", path: "/b2r.jpg" },
    { label: "Poste de Chirurgie", path: "/fauteuil2-3.jpg" },
    { label: "Cabinet de Parodontologie", path: "/paro.jpg" },
  ];

  const renderSlides = () => {
    return pictures.map((picture, id) => {
      return (
        <Paper
          style={{
            backgroundImage: `url(${picture.path})`,
            height: "60vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          key={id}
        >
          <Typography
            variant="h5"
            style={{
              color: theme.palette.text.light,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100%",
              textAlign: "center",
              padding: "1rem 0",
            }}
          >
            {picture.label}
          </Typography>
        </Paper>
      );
    });
  };

  return (
    <AnimatedPage>
      <Container maxWidth="xl" style={{ paddingTop: "2rem" }}>
        <Typography variant="h4" align="left">
          Présentation du Cabinet
        </Typography>
        <Divider style={{ marginBottom: "2rem" }} />
        <Carousel>{renderSlides()}</Carousel>
      </Container>
    </AnimatedPage>
  );
};

export default cabinet;
