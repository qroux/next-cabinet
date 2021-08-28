import { Container, Typography, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/AnimatedPage";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    [theme.breakpoints.only("xl")]: {
      height: "70vh",
    },
    [theme.breakpoints.only("lg")]: {
      height: "70vh",
    },
    [theme.breakpoints.only("md")]: {
      height: "65vh",
    },
    [theme.breakpoints.only("sm")]: {
      height: "60vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
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
        <Typography variant="h5" align="left">
          Le cabinet
        </Typography>
        <Divider style={{ marginBottom: "2rem" }} />
        <Carousel>{renderSlides()}</Carousel>
      </Container>
    </AnimatedPage>
  );
};

export default Cabinet;
