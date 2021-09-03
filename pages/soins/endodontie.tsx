import React from "react";
import { Container, List, Typography } from "@material-ui/core";
import Head from "next/head";

import AnimatedPage from "../../src/components/page/AnimatedPage";
import Title from "../../src/components/page/Title";
import PageHeader from "../../src/components/page/PageHeader";
import MainSection from "../../src/components/page/MainSection";
import QuestionSectionHeader from "../../src/components/page/QuestionSectionHeader";
import QuestionAccordion from "../../src/components/page/QuestionAccordion";
import PhotoSection from "../../src/components/page/PhotoSection";
import QuestionSection from "../../src/components/page/QuestionSection";

const Endodontie = () => {
  return (
    <AnimatedPage>
      <Head>
        <title>Docteur Gilbert Roux - Endodontie</title>
        <meta
          name="description"
          content="Endodontie - Le traitement des racines, pourquoi et comment ?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg" style={{ paddingTop: "1rem" }}>
        <Title label="Endodontie" />

        <PageHeader
          title="Le traitement des racines, pourquoi et comment ?"
          crumbs={[
            { label: "Accueil", path: "/" },
            { label: "Soins", path: "/soins" },
            { label: "Parodontologie", path: "/parodontologie" },
          ]}
        />

        {/* Content */}

        <MainSection>
          <Typography variant="body1">
            Dans de rares cas, il peut arriver qu’un traitement de racine
            (endodontique) ne fonctionne pas comme prévu. La dent traitée
            pourrait ne pas guérir correctement ou le patient pourrait éprouver
            des complications post-opératoires qui compromettent la dent.
          </Typography>
          <br />
          <Typography variant="body1">
            La reprise d’un traitement endodontique consiste à enlever la
            couronne et les matériaux d’obturation précédents, à nettoyer les
            canaux radiculaires, et à réapposer un matériau d’obturation et une
            couronne prothétique sur la dent. En bref, la reprise d’un
            traitement endodontique est presque identique à la procédure
            initiale, hormis le retrait des structures du premier traitement.{" "}
            <strong>
              Le taux de réussite pour une reprise d’un traitement endodontique
              se situe à 75%.
            </strong>
          </Typography>
          <br />
          <Typography variant="body1">
            <strong>
              Les traitements endodontiques et les reprises sont une meilleure
              alternative que l’extraction dentaire pour la plupart des
              patients.
            </strong>{" "}
            Si une dent a un bon soutien osseux, une surface solide et une
            gencive saine, elle a de bonnes chances d’être préservée. Opter pour
            la reprise d’un traitement endodontique peut être beaucoup moins
            coûteux que les solutions alternatives. Les implants dentaires, les
            ponts multiples et la création de dents prothétiques esthétiques
            coûtent beaucoup plus chers que de travailler sur une dent
            naturelle. Ces solutions exigent également un entretien et apportent
            une sensation moins naturelle qu’une « vraie » dent.
          </Typography>
        </MainSection>

        {/* QUESTIONS */}
        <QuestionSection>
          <QuestionSectionHeader title={"Le traitement des racines"} />
          <div>
            <QuestionAccordion
              title={
                "Pourquoi la reprise d’un traitement des racines est-elle nécessaire ?"
              }
            >
              <Typography variant={"body1"}>
                Il y a un certain nombre de raisons pour lesquelles un
                traitement endodontique initial échoue de manière inattendue,
                incluant :
              </Typography>

              <List>
                <Typography variant="body1">
                  - Une couronne fracturée avec une fuite du matériau
                  d’obturation
                </Typography>

                <Typography variant="body1">
                  - Des canaux courbés ou étroits qui n’ont pas été traités au
                  cours de la procédure initiale
                </Typography>

                <Typography variant="body1">
                  - Une nouvelle carie sur la dent traitée
                </Typography>

                <Typography variant="body1">
                  - Une nouvelle fracture sur la dent traitée
                </Typography>

                <Typography variant="body1">
                  - Des structures endodontiques complexes à ramifications
                  multiples
                </Typography>
              </List>

              <Typography variant={"body1"}>
                <strong>
                  Bien que la perspective d’une chirurgie endodontique
                  additionnelle puisse sembler désagréable, la reprise d’un
                  traitement endodontique est assez simple. En général,
                  l’ensemble du traitement peut être complété en 1 à 3 visites.
                </strong>
              </Typography>
            </QuestionAccordion>

            <QuestionAccordion
              title={
                "En quoi consiste la reprise d’un traitement endodontique ?"
              }
            >
              <Typography variant={"body1"}>
                Le jour de la procédure de la reprise d’un traitement
                endodontique, une anesthésie locale sera réalisé. La longueur du
                rendez-vous dépend en partie de l’inflammation et de la
                complexité du traitement.
              </Typography>
              <br />

              <Typography variant={"body1"}>
                La première étape d’une reprise de traitement endodontique est
                d’accéder à la portion intérieure de la dent. Si une couronne et
                un tenon ont été insérés, ils seront enlevés.
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Ensuite, le matériau d’obturation et les obstructions qui
                bloquent les canaux radiculaires seront enlevés. Ce retrait est
                effectué en utilisant une pièce à main ultrasonique. L’avantage
                d’utiliser cet outil est que tout matériau indésirable est
                relâché par vibrations. De minuscules instruments seront ensuite
                utilisés pour nettoyer et remodeler les canaux radiculaires. Des
                radiographies peuvent être prises pour s’assurer de la
                progression du débouchage et à la fin pour vérifier que les
                racines sont bien propres et libres pour une nouvelle obturation
                étanche. Si cette partie du traitement s’avère plus complexe,
                une pause sera faite. La fin de la procédure de nettoyage sera
                alors effectuée lors de la visite suivante.
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Lorsque le dentiste a validé que les canaux sont complètement
                nettoyés et libre d’accès il procède au rebouchage. Un ciment
                d’étanchéité et des cônes de gutta-percha sont utilisés pour
                obturer les racines et les sceller hermétiquement. Cette
                procédure permet la guérison de la dent en la protégeant des
                bactéries et donc des infections. Enfin, une obturation
                provisoire est placée dans la dent. Dans la séance suivante la
                dent reçoit une reconstitution interne pour renforcer sa partie
                centrale que la carie a détruite. Cette dent traitée au niveau
                des racines et maintenant renforcée en son centre doit être
                néanmoins recouverte par une couronne pour la protéger
                totalement et lui redonner son esthétique.
              </Typography>
            </QuestionAccordion>

            <QuestionAccordion title={"Les limites du traintement des racines"}>
              <Typography variant="body1">
                En dépit des efforts, du temps, et des précautions opératoires
                certaines dents peuvent ne pas atteindre le degré de sécurité
                long terme recherché. Les Raisons sont liées à certains
                obstacles :
              </Typography>
              <br />

              <List>
                <Typography variant="body1">
                  - La complexité radiculaire initiale. Courbure très marquées,
                  ramification…
                </Typography>

                <Typography variant="body1">
                  - Le retraitement peut trouver l’intérieur des racines des
                  parties métalliques qui ne peuvent être retirées
                </Typography>

                <Typography variant="body1">
                  - Le retraitement peut trouver l’intérieur des dents très
                  fragilisé tenant compte de leur finesse ou leur
                  déminéralisation par la carie.
                </Typography>

                <Typography variant="body1">
                  - Le retraitement rencontre également un intérieur des canaux
                  des fois, très modifiés dans leur courbure naturelle
                  d’origine. On peut rencontrer des butées, ou des trajets
                  rectilignes (appelés faux canaux) ressortant latéralement à la
                  racine et non à son extrémité.
                </Typography>

                <Typography variant="body1">
                  - Une nouvelle fracture sur la dent traitée
                </Typography>

                <Typography variant="body1">
                  - Des structures endodontiques complexes à ramifications
                  multiples
                </Typography>
              </List>
            </QuestionAccordion>

            <QuestionAccordion title={"En pratique, comment faire ?"}>
              <Typography variant={"body1"}>
                Cette impossibilité à atteindre une herméticité radiologique à
                100% doit donc être prise en compte. Plusieurs décisions alors
                sont possibles.
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Le patient est adressé à un Endodontiste pour poursuivre avec
                des moyens techniques encore plus spécialisés. (Micro chirurgie
                des racines ou des extrémités des racines sous Microscope.)
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Apres avoir été informé et en l’absence de sensibilité une pause
                est possible. Ce temps de réflexion permet d’évaluer calmement
                le BENEFICE/RISQUE. En effet certaines dents multi traitées ne
                peuvent supporter un démontage de plus sans se fracturer,
                rendant alors l’extraction inévitable.
              </Typography>
            </QuestionAccordion>

            <QuestionAccordion title={"Conclusion"}>
              <Typography variant={"body1"}>
                Les retraitements endodontiques occupent une place importante
                dans l’endodontie quotidienne du praticien dentiste. C’est un
                acte opératoire aux multiples difficultés. Son objectif est
                d’atteindre la zone canalaire apicale afin d’apporter irrigation
                et désinfection et mise en forme avant ré-obturation
                tridimensionnelle étanche. La règle est de « tenter de faire
                mieux » et surtout « essayer de ne pas faire plus mal ».
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Il faut savoir choisir l’instrumentation la mieux adaptée, en
                maîtriser parfaitement le fonctionnement et surtout consacrer du
                Temps pour être Disponible et Attentif. Le praticien doit être
                capable d’analyser sa capacité à gérer son acte et d’accepter de
                passer la main si nécessaire.
              </Typography>
              <br />

              <Typography variant={"body1"}>
                Le praticien et le patient doivent collaborer pour se donner le
                temps et l’attention qui souvent dénoue des situations pourtant
                complexes.
              </Typography>
            </QuestionAccordion>
          </div>
        </QuestionSection>

        {/* PHOTO */}
        <PhotoSection
          imgPath={"/card-endo.jpg"}
          galleryPaths={[
            "/endo/endo1.png",
            "/endo/endo1-1.png",
            "/endo/endo1-2.png",
            "/endo/endo2-1.png",
            "/endo/endo2-2.png",
            "/endo/endo2-3.png",
          ]}
        />
      </Container>
    </AnimatedPage>
  );
};

export default Endodontie;
