import React from "react";
import { Container, List, Typography } from "@material-ui/core";

import AnimatedPage from "../src/components/page/AnimatedPage";
import Title from "../src/components/page/Title";
import PageHeader from "../src/components/page/PageHeader";
import MainSection from "../src/components/page/MainSection";
import QuestionSectionHeader from "../src/components/page/QuestionSectionHeader";
import QuestionAccordion from "../src/components/page/QuestionAccordion";
import PhotoSection from "../src/components/page/PhotoSection";
import QuestionSection from "../src/components/page/QuestionSection";

const Parodontologie = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="lg" style={{ paddingTop: "1rem" }}>
        <Title label="Parodontologie" />

        <PageHeader
          title="Douleurs, déchaussement, comment traiter une parondontite ?"
          crumbs={[
            { label: "Accueil", path: "/" },
            { label: "Soins", path: "/soins" },
            { label: "Parodontologie", path: "/parodontologie" },
          ]}
        />

        {/* Content */}

        <MainSection>
          <Typography variant="body1">
            Le déchaussement des dents porte le nom médical de maladies
            parodontales.
            <strong>
              Ce sont une série de maladies qui se caractérisent par la
              destruction, plus ou moins sévère, plus ou moins rapide, du
              parodonte, c’est-à-dire des tissus qui soutiennent vos dents.
            </strong>
          </Typography>
        </MainSection>

        {/* QUESTIONS */}
        <QuestionSection>
          <QuestionSectionHeader
            title={"Le traitement des atteintes gingivales"}
          />
          <div>
            <QuestionAccordion
              title={"Pourquoi la parodontite se manifeste-t-elle maintenant ?"}
            >
              <Typography variant={"body1"}>
                Pour déclencher une parondite, il faut deux conditions : L’une
                sans l’autre ne peut pas détruire les tissus parodontaux.{" "}
                <strong>
                  Dans la plupart des cas, il s’agit d’une infection chronique
                  qui évolue par la succession d’épisodes d’activité
                </strong>{" "}
                (souvent sans que vous vous en rendiez compte) entrecoupés de
                périodes de repos.
                <br />
                <strong>
                  Le terrain immunitaire et la flore bactérienne de chacun.
                </strong>{" "}
                Ces parodontites apparaissent chez certains individus et pas
                chez d’autres : nous ne sommes pas tous susceptibles de souffrir
                de parondontite / d’un déchaussement.
              </Typography>
            </QuestionAccordion>

            <QuestionAccordion
              title={
                "Quelles sont les risques d’apparition et de récidive d’une parodontite ?"
              }
            >
              <Typography variant={"body1"}>
                Les principaux facteurs de risque sont :
              </Typography>

              <List>
                <Typography variant="body1">
                  - Présence <strong>d’antécédents familiaux</strong> de
                  parodontite.
                </Typography>

                <Typography variant="body1">
                  - Présence de <strong>stress</strong> accompagné d’anxiété.
                </Typography>

                <Typography variant="body1">
                  - Consommation excessive de <strong>tabac</strong>.
                </Typography>

                <Typography variant="body1">
                  - État médical où le sujet est sensible aux infections{" "}
                  <strong>(diabète par exemple)</strong>.
                </Typography>

                <Typography variant="body1">
                  - <strong>Résistance à la carie dentaire</strong>.
                </Typography>

                <Typography variant="body1">
                  - Historique d’infection gingivale sévère (gingivite).
                </Typography>
              </List>
            </QuestionAccordion>

            <QuestionAccordion
              title={
                "Comment prévenir une parodontite / déchaussement dentaire ?"
              }
            >
              <Typography variant="body1">
                Il existe aujourd’hui des{" "}
                <strong>
                  moyens modernes de prévenir efficacement le déchaussement
                </strong>{" "}
                dont notre cabinet peut vous informer utilement. De plus le
                docteur Roux, parodontiste est à même,{" "}
                <strong>
                  après un entretien et des examens précis, de déterminer la
                  nature exacte du risque de votre déchaussement
                </strong>{" "}
                car il existe des sujets plus à risque que d’autres de souffrir
                de déchaussement ou parodontite.
              </Typography>
              <br />

              <Typography variant="body1">
                En terme de prévention, après évaluation de votre degré de
                risque de voir vos dents se déchausser,{" "}
                <strong>
                  un programme simple, peu coûteux et adapté à votre risque,
                  permet de diminuer sensiblement la probabilité de
                  déchaussement
                </strong>
              </Typography>
              <br />
              <Typography variant="body1">
                Prévenir, c’est{" "}
                <strong>
                  évaluer l’intensité du risque et diminuer ce risque grâce à un
                  traitement préventif.
                </strong>
              </Typography>

              <Typography variant="body1">
                Au total,{" "}
                <strong>
                  il est bien plus agréable et moins coûteux de garder ses dents
                </strong>{" "}
                que de les perdre à condition d’avoir les bons réflexes et de
                bénéficier d’outils thérapeutiques opérants.
              </Typography>
            </QuestionAccordion>
          </div>
        </QuestionSection>

        {/* PHOTO */}
        <PhotoSection />
      </Container>
    </AnimatedPage>
  );
};

export default Parodontologie;
