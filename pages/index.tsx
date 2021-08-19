import Head from "next/head";
import AnimatedPage from "../src/components/AnimatedPage";
import { Container, Typography, Divider, Box } from "@material-ui/core";

export default function Home() {
  return (
    <AnimatedPage>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "80vh",
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
        <Container
          maxWidth={false}
          style={{
            backgroundImage: "url(/accueil.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
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
              <Typography variant="h3">Docteur Gilbert Roux</Typography>
              <Divider variant="fullWidth" style={{ marginBottom: "1rem" }} />
              <Typography variant="h5">Chirurgien Dentiste</Typography>
              <Typography variant="h5">
                Spécialisé en Implantologie et Parodontologie
              </Typography>
            </Box>
          </Container>
        </Container>
      </div>
    </AnimatedPage>
  );
}
