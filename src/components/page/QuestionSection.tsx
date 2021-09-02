import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  ThemeProvider,
  List,
  ListItem,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QuestionAccordion from "./QuestionAccordion";

const QuestionSection = () => {
  return (
    <>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Le traitement des patients phobiques
      </Typography>

      <div>
        <QuestionAccordion title={"Mise en confiance"}>
          <Typography variant={"body1"}>
            <strong>
              Le passé des phobiques est majoritairement cristallisé sur une
              rupture de confiance.
            </strong>{" "}
            Un traitement subit par un dentiste autoritaire et brutal. Une
            promesse rapide de ne pas faire mal, mais non tenue. Une sensation
            de faiblesse face à une autorité parentale liguée à l’action subie
            de la part du dentiste. Une confusion entre la propre peur des
            parents muée en autorité et injonction envers l’enfant, prié de
            croire que le dentiste ne fait pas mal que tout va bien, tout est
            normal.
          </Typography>
          <br />
          <Typography variant={"body1"}>
            <strong>
              Il est clair qu’un projet dentaire pour un patient anxieux ne peut
              se construire sans que le patient ait une confiance absolue en son
              dentiste.
            </strong>{" "}
            Il attend bien sur un travail bien fait mais aussi d’être informé
            des étapes de ce travail avenir des moments de repos. Il attend que
            le dentiste ait l’attention voulue pour lui permettre de marcher à
            son rythme sans s’essouffler et qu’ils soit conscient de l’anxiété
            qu’il ressent. Dans le contexte traditionnel des cabinets dentaire
            ceci est un vrai défi pour le dentiste soumis lui même à son propre
            stress dans le rythme quotidien débordé.
          </Typography>
        </QuestionAccordion>

        <QuestionAccordion title={"Neutralisation des stimuli anxiogènes"}>
          <Typography variant={"body1"}>
            Pour un patient phobique, et consécutivement aux expériences faites
            dans le passé, le cabinet dentaire est un lieu à risques.
            <br />
            <strong>
              En effet cet environnement rassemble un ensemble de signaux auquel
              il est conditionné négativement.
            </strong>{" "}
            Un patient phobique a mémorisé et associé émotionnellement des
            éléments qui agissent même à très faible dose à la manière des
            allergènes chez des allergiques. Il faudra donc commencer par
            repérer pour diminuer à minima le nombre et le niveau de ces
            stimulations perçue négativement.
          </Typography>
          <br />
          <Typography variant={"body1"}>
            Un certain nombre de précautions seront donc à prendre.
            <br />
            La perception de lumière et d’espace joue favorablement dans les
            environnements dentaires. Il en va de même les éléments de
            décoration apportant des touches colorées et vivantes.
            <strong>
              Ceci évite aux anxieux la sensation d’étouffement et augmente leur
              sentiment positif de contrôle et de liberté.
            </strong>{" "}
            <br />
            <strong>
              Le salon d’attente doit assurer un agrément et un confort
              acoustique
            </strong>{" "}
            le mettant à l’abris des nuisances sonores désagréables comme le
            bruit des turbines et des moteurs.
            <strong>
              Les attentes doivent être courtes et agréables.
            </strong>{" "}
            Elles peuvent même être constructives et objets positifs de
            découverte en matière musicale vidéo ou lecture. Tout ceci peut
            libérer l’esprit en invitant au voyage.
          </Typography>
        </QuestionAccordion>

        <p></p>

        <QuestionAccordion title={"Traitement doux, sans stress"}>
          <Typography variant={"body1"}>
            <strong>
              La confiance en le dentiste, la personnalisation des procédures
              d’anesthésie et le choix technique de matériel ou de produit sont
              un ensemble cohérent qui doit bénéficier aujourd’hui à tous les
              patient et à l’évidence tout particulièrement au patients anxieux.
            </strong>
          </Typography>
          <Typography variant={"body1"}>
            La crainte d’une anesthésie qui ne “marche pas” est dans ces
            conditions d’attention non cliniquement fondée. La peur des piqûres
            chez les patients phobiques nécessite d’être réalisée avec beaucoup
            de précautions par des “équipes dentiste-assistante” très bien
            formées et en bonne entente.
          </Typography>
          <Typography variant={"body1"}>
            Pour atténuer l’inconfort de l’aiguille le protocole mise en place
            est le suivant :
          </Typography>

          <List>
            <ListItem>
              <Typography variant="body1">
                <strong>
                  Préparation du site d’injection par application au coton tige
                  de gel anesthésique de contact.
                </strong>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <strong>Utilisation d’aiguilles très fines 0.27 mm</strong>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <strong>Anesthésie intraligamentaire :</strong> l’injection est
                réalisée avec très peu d’inconfort car la zone est
                pré-anesthésiée par le gel de contact. L’injection très
                progressive et très lente est localisée dans l’espace entre la
                dent et la racine.
                <strong>
                  Sa diffusion est très rapide et très efficace sans donner un
                  sensation d’engourdissement
                </strong>
                très large atteignant les lèvres et la langue.
              </Typography>
            </ListItem>
          </List>

          <Typography variant={"body1"}>
            <strong>
              Une surveillance attentive doit déterminer le moment des pauses
              pour reprendre son souffle et écouter le retour d’information du
              patient.
            </strong>
            Celui-ci est fondamental car il assure un avancement du traitement
            validé en permanence par l’équilibre émotionnel du patient.
          </Typography>

          <Typography variant={"body1"}>
            Ce type prévenante d’approche anesthésique, très efficace dans les
            contextes de faible stress, est néanmoins insuffisante chez dent
            patient dont la dentophobie est sèvre.
            <br />
            <strong>
              Il existe alors des solutions intermédiaires avant le recours à
              une anesthésie générale : La sédation consciente au protoxyde
              d’azote (MEOPA) ou des tranquilisant sont à envisager
              préalablement et de façon complémentaire.
            </strong>
          </Typography>
        </QuestionAccordion>
      </div>
    </>
  );
};

export default QuestionSection;
