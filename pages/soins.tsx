import {
  Container,
  Typography,
  Divider,
  Grid,
  Paper,
  Link as MuiLink,
  Button,
} from "@material-ui/core";
import Chevron from "@material-ui/icons/ChevronRightRounded";
import Link from "next/link";
import React from "react";
import AnimatedPage from "../src/components/page/AnimatedPage";
import GridItem from "../src/components/page/GridItem";
import Title from "../src/components/page/Title";

const soins = () => {
  const categories = [
    { label: "Parodontologie", path: "/", imgPath: "/card-paro.jpg" },
    { label: "Endodontie", path: "/", imgPath: "/card-endo.jpg" },
    { label: "Esthétique", path: "/", imgPath: "/card-esthetique.jpg" },
  ];

  const questions = [
    {
      label: "J'ai peur d'aller chez le dentiste, comment me faire soigner ?",
      path: "/",
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
      <Container maxWidth="xl" style={{ paddingTop: "1rem" }}>
        <Title label="Les soins" />
        <Grid container spacing={1}>
          {renderGridItems()}
        </Grid>
      </Container>
      <Container maxWidth="xl" style={{ paddingTop: "5rem" }} id={"faq"}>
        <Title label="Vos questions" />
        {renderQuestions()}
      </Container>
    </AnimatedPage>
  );
};

export default soins;
