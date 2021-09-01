import { Container, Typography, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/page/AnimatedPage";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Title from "../src/components/page/Title";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    [theme.breakpoints.only("xl")]: {
      height: "50rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "40rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "35rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
    },
  },
}));

const Cabinet = () => {
  const classes = useStyles();
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
          square={true}
          className={classes.paperContainer}
          style={{
            backgroundImage: `url(${picture.path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          key={id}
        >
          <Typography
            variant="h6"
            style={{
              // @ts-ignore
              color: theme.palette.text.light,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100%",
              textAlign: "center",
              padding: "0.5rem 0",
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
      <Container maxWidth="lg" style={{ paddingTop: "1rem" }}>
        <Title label="Le cabinet" />
        <Carousel animation="fade">{renderSlides()}</Carousel>
      </Container>
    </AnimatedPage>
  );
};

export default Cabinet;
