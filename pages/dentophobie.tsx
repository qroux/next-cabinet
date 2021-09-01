import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Breadcrumbs,
  Link as MuiLink,
} from "@material-ui/core";
import React from "react";
import AnimatedPage from "../src/components/page/AnimatedPage";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Title from "../src/components/page/Title";
import Quote from "@material-ui/icons/FormatQuoteRounded";
import PageHeader from "../src/components/page/PageHeader";
import MainSection from "../src/components/page/MainSection";
import QuestionSection from "../src/components/page/QuestionSection";

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

const Dentophobie = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AnimatedPage>
      <Container maxWidth="lg" style={{ paddingTop: "1rem" }}>
        <Title label="Dentophobie" />

        <PageHeader
          title="J'ai peur d'aller chez le dentiste, comment me faire soigner ?"
          crumbs={[
            { label: "Accueil", path: "/" },
            { label: "Soins", path: "/soins" },
            { label: "Dentophobie", path: "/dentophobie" },
          ]}
        />

        {/* Content */}

        <MainSection
          body="
          <p>
          Certains se sentent stressés à l’idée même de se rendre chez
          le dentiste.On estime à 30% ceux qui avoue le conflit
          intérieur qu’ils ressentent avant de pouvoir prendre un rendez
          vous.
          <br />
          <strong>
            Un vécu traumatisant au cours de l’enfance, lors de
            mauvaises expériences, est souvent à l’origine de cette
            phobie.
          </strong>
          Elle se manifeste sur le fauteuil dentaire par des
          accélérations du coeur, de la transpiration mais cet état est
          souvent précédé d’insomnies la veille même du rendez vous.
        </p>

        <p>
          La dentophobie apparait comme une peur primitive semblant
          irrationnelle. Malgré tous les progrès techniques et leurs
          promesses pour “Ne pas avoir mal”, le phobique ne se sent pas
          rassuré, et bien souvent pas du tout pris au sérieux face à
          “sa peur à lui”. Ce conflit non résolu et cette impasse dans
          le refus des soins, sont extrêment dommageables, aussi bien
          pour l'état dentaire que l’état général et psychique.
          <strong>
            L’aide professionnelle prévenante et structurée peut
            organiser efficacement la sortie de cette impasse.
          </strong>
        </p>
        <p>
          <strong>
            Notre objectif central est d’enlever la peur du dentiste
            palier par palier pour permettre aux patients phobiques de
            reprendre contrôle et reprendre leur souffle.
          </strong>
          Construire un rapport de confiance clair est fondamental.
        </p>
        <p>
          La démarche d'accompagnement est étagée grâce à l’utilisation
          de différentes procédures comme le protoxyde d’azote, les
          traitements tranquillisants ou sédatifs voir même dans certain
          cas l'anesthésie générale.
          <strong>
            En fin de traitement, l'assainissement dentaire doit être
            atteint mais, au delà, l'objectif est l’autonomie du patient
            pour poursuivre ses traitements en toute normalité et sans
            anxiété.
          </strong>
        </p>"
        />

        <QuestionSection />
      </Container>
    </AnimatedPage>
  );
};

export default Dentophobie;
