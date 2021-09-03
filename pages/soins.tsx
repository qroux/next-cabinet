import React from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";
import Chevron from "@material-ui/icons/ChevronRightRounded";
import Link from "next/link";
import Head from "next/head";

import AnimatedPage from "../src/components/page/AnimatedPage";
import GridItem from "../src/components/page/GridItem";
import Title from "../src/components/page/Title";

const soins = () => {
  const categories = [
    {
      label: "Parodontologie",
      path: "/parodontologie",
      imgPath: "/card-paro.jpg",
    },
    { label: "Endodontie", path: "/endodontie", imgPath: "/card-endo.jpg" },
    { label: "Esthétique", path: "/soins", imgPath: "/card-esthetique.jpg" },
  ];

  const questions = [
    {
      label: "J'ai peur d'aller chez le dentiste, comment me faire soigner ?",
      path: "/dentophobie",
    },
  ];

  const renderGridItems = () => {
    return categories.map((category, id) => {
      return (
        <GridItem
          label={category.label}
          imagePath={category.imgPath}
          path={category.path}
          key={id}
        />
      );
    });
  };

  const renderQuestions = () => {
    return questions.map((question, id) => {
      return (
        <Link href={question.path} key={id} passHref>
          <Button>
            <Chevron />
            <Typography variant="body1"> {question.label}</Typography>
          </Button>
        </Link>
      );
    });
  };

  return (
    <AnimatedPage>
      <Head>
        <title>Docteur Gilbert Roux - Les soins</title>
        <meta
          name="description"
          content="Cabinet dentaire du Docteur Gilbert Roux. Adresse: 9 Rue Francis Davso, 13001 Marseille. Spécialisé en Implantologie et Parodontologie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg" style={{ paddingTop: "1rem" }}>
        <Title label="Les soins" />

        <Typography
          variant="h5"
          style={{ marginTop: "1rem", fontWeight: "bold" }}
        >
          Categories
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />

        <Grid container spacing={1}>
          {renderGridItems()}
        </Grid>
      </Container>
      <Container maxWidth="lg" style={{ paddingTop: "2rem" }} id={"faq"}>
        <Typography
          variant="h5"
          style={{ marginTop: "1rem", fontWeight: "bold" }}
        >
          Vos questions
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />

        {renderQuestions()}
      </Container>
    </AnimatedPage>
  );
};

export default soins;
