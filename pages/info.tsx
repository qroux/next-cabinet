import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Box,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/page/AnimatedPage";
import Title from "../src/components/page/Title";

const useStyles = makeStyles((theme) => ({
  fullContainer: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      // justifyContent: "space-around",
      // alignItems: "center",
    },
  },
  infoContainer: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      // justifyContent: "space-around",
      // alignItems: "center",
    },
  },
  autreContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "5rem",
    },
  },
}));

const Info = () => {
  const classes = useStyles();
  const opennings = [
    { day: "Lundi", morning: "9h00-12h00", evening: "14h00-19h00" },
    { day: "Mardi", morning: "9h00-12h00", evening: "14h00-19h00" },
    { day: "Mercredi", morning: "9h00-12h00", evening: "14h00-19h00" },
    { day: "Jeudi", morning: "9h00-12h00", evening: "Fermé" },
    { day: "Vendredi", morning: "9h00-12h00", evening: "14h00-19h00" },
  ];

  const renderOpennings = () => {
    return opennings.map((openning, id) => {
      return (
        <div style={{ marginBottom: "1rem" }} key={id}>
          <Typography variant="h6" align="center">
            {openning.day}
          </Typography>
          <Typography variant="body1" align="center">
            Matin: {openning.morning} | Après-midi: {openning.evening}
          </Typography>
        </div>
      );
    });
  };

  return (
    <AnimatedPage>
      <Container
        maxWidth="lg"
        style={{ paddingTop: "1rem" }}
        disableGutters={false}
      >
        <Title label="Informations pratiques" />

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={classes.fullContainer}
            style={{ display: "flex", flex: 1 }}
          >
            {/* Info */}
            <div
              className={classes.infoContainer}
              style={{
                flex: 1,
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {/* Info */}
              <div style={{ flex: 0.5, padding: "0 2rem" }}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ marginBottom: "2rem", fontWeight: "bold" }}
                >
                  Consultations
                </Typography>

                {renderOpennings()}

                <Typography
                  variant="h6"
                  align="center"
                  style={{ marginTop: "4rem" }}
                >
                  Nos consultations sont exclusivement sur rendez-vous
                </Typography>
              </div>

              <Divider orientation="vertical" flexItem />

              {/* Autre */}
              <div
                className={classes.autreContainer}
                style={{
                  flex: 1,
                  padding: "0 2rem",
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  Protocole Sanitaire
                </Typography>

                <Typography
                  variant="body1"
                  align="left"
                  style={{ marginTop: "4rem" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  rerum iste doloribus eveniet enim vitae vel error omnis nisi
                  facilis repudiandae, recusandae facere, cum impedit ullam. Aut
                  amet quam error.
                </Typography>

                <Typography
                  variant="body1"
                  align="left"
                  style={{ marginTop: "4rem" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  rerum iste doloribus eveniet enim vitae vel error omnis nisi
                  facilis repudiandae, recusandae facere, cum impedit ullam. Aut
                  amet quam error.
                </Typography>

                <Typography
                  variant="body1"
                  align="left"
                  style={{ marginTop: "4rem" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  rerum iste doloribus eveniet enim vitae vel error omnis nisi
                  facilis repudiandae, recusandae facere, cum impedit ullam. Aut
                  amet quam error.
                </Typography>
              </div>
            </div>

            {/* MAP */}
            <div
              className="mapContainer"
              style={{ flex: 1, paddingTop: "2rem" }}
            >
              <iframe
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=400&amp;height=600&amp;hl=en&amp;q=9%20rue%20francis%20davso%2C%2013001%20marseille+(test)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              ></iframe>
            </div>
          </div>
        </Box>
      </Container>
    </AnimatedPage>
  );
};

export default Info;
