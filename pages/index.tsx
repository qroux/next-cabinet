import Head from "next/head";
import AnimatedPage from "../src/components/AnimatedPage";
import {
  Container,
  Typography,
  Divider,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";
import NavCard from "../src/components/NavCard";

export default function Home() {
  const cards = [
    {
      label: "Implantologie",
      imagePath: "/logo-implant.png",
      path: "/cabinet",
    },
    { label: "Parodontologie", imagePath: "/logo-paro.png", path: "/cabinet" },
    {
      label: "Vos Questions",
      imagePath: "/logo-question.png",
      path: "/cabinet",
    },
  ];

  const renderNavCards = () => {
    return cards.map((card, id) => {
      return (
        <NavCard
          label={card.label}
          imagePath={card.imagePath}
          path={card.path}
          key={id}
        />
      );
    });
  };

  return (
    <AnimatedPage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "80vh",
          flexDirection: "column",
        }}
      >
        <Head>
          <title>Docteur Gilbert Roux</title>
          <meta
            name="description"
            content="Cabinet dentaire du Docteur Gilbert Roux. Adresse: 9 Rue Francis Davso, 13001 Marseille. Spécialisé en Implantologie et Parodontologie"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          maxWidth={false}
          style={{
            backgroundImage: "url(/accueil.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            height: "50vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container
            maxWidth="xl"
            style={{
              border: "1px solid transparent",
              flex: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h3" style={{ color: "white" }}>
                Docteur Gilbert Roux
              </Typography>
              <Divider variant="fullWidth" style={{ marginBottom: "1rem" }} />
              <Typography variant="h4" style={{ color: "white" }}>
                Chirurgien Dentiste
              </Typography>
              <Typography variant="h4" style={{ color: "white" }}>
                Spécialisé en Implantologie et Parodontologie
              </Typography>
            </Box>
          </Container>
        </Container>
        <Container
          maxWidth={"lg"}
          style={{
            paddingTop: "3rem",
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {renderNavCards()}
        </Container>
      </div>
    </AnimatedPage>
  );
}
