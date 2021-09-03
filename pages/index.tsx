import Head from "next/head";
import AnimatedPage from "../src/components/page/AnimatedPage";
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
  makeStyles,
} from "@material-ui/core";
import React from "react";
import NavCard from "../src/components/page/NavCard";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
}));

export default function Home() {
  const cards = [
    {
      label: "Parodontologie",
      imagePath: "/logo-paro.png",
      path: "/parodontologie",
    },
    {
      label: "Implantologie",
      imagePath: "/logo-implant.png",
      path: "/soins",
    },
    {
      label: "Vos Questions",
      imagePath: "/logo-question.png",
      path: "/soins#faq",
    },
  ];

  const classes = useStyles();

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

        {/* Banner */}
        <Container
          maxWidth={false}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6)), url(/accueil.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "50% 10%",
            height: "50vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Banner Content */}
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
              <Typography variant="h4" style={{ color: "white" }}>
                Docteur Gilbert Roux
              </Typography>
              <Divider variant="fullWidth" style={{ marginBottom: "1rem" }} />
              <Typography variant="h6" style={{ color: "white" }}>
                Chirurgien Dentiste
              </Typography>
              <Typography variant="h6" style={{ color: "white" }}>
                Spécialisé en Implantologie et Parodontologie
              </Typography>
            </Box>
          </Container>
        </Container>

        {/* Navigation cards */}
        <Container
          className={classes.navContainer}
          maxWidth={"lg"}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            padding: "5rem 0",
          }}
        >
          {renderNavCards()}
        </Container>
      </div>
    </AnimatedPage>
  );
}
