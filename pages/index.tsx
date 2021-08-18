import { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import AnimatedPage from "../src/components/AnimatedPage";
import { Context as AuthContext } from "../src/globalState/context/AuthContext";
import { Context as AppContext } from "../src/globalState/context/AppContext";
import StateCheck from "../src/components/StateCheck";
import { Button, Container, Typography, Divider } from "@material-ui/core";

export default function Home() {
  const {
    state: { token },
    fetchUserToken,
  } = useContext(AuthContext);

  const {
    state: { darkMode },
  } = useContext(AppContext);

  useEffect(() => {
    fetchUserToken();
  }, []);

  return (
    <AnimatedPage>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          maxWidth="xl"
          style={{ border: "1px solid transparent", flex: 1 }}
        >
          <Typography variant="h2" align="center">
            à remplacer
          </Typography>

          <Divider />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "2rem",
              flexDirection: "column",
            }}
          >
            <h1>
              Welcome to{" "}
              <a
                style={{ color: "#0070f3", textDecoration: "none" }}
                href="https://nextjs.org"
              >
                Next.js!
              </a>
            </h1>

            <div
              style={{
                width: "15 rem",
                overflow: "hidden",
                marginBottom: "1rem",
              }}
            >
              <StateCheck state={token} label={"Token: " + token} />
              <StateCheck state={darkMode} label="Dark Mode" />
            </div>
            <Typography variant="h6">Transition test + Auth Flow</Typography>
            <Link href="/login" passHref>
              <Button
                variant="contained"
                color="secondary"
                name="login"
                style={{ width: "10rem" }}
              >
                à remplacer
              </Button>
            </Link>
          </div> */}
        </Container>
      </div>
    </AnimatedPage>
  );
}
