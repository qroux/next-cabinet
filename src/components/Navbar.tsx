import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControlLabel,
  Switch,
  Container,
} from "@material-ui/core";
import { useContext } from "react";
import { Context as AppContext } from "../globalState/context/AppContext";
import DarkIcon from "@material-ui/icons/Brightness4Outlined";

export default function Navbar() {
  const {
    state: { darkMode },
    switchTheme,
  } = useContext(AppContext);

  const buttons = [
    { label: "Le cabinet", path: "/cabinet" },
    { label: "Les soins", path: "/soins" },
    { label: "Info Pratiques", path: "/info" },
  ];

  const renderButtons = () => {
    return buttons.map((button) => {
      return (
        <Link href={button.path} passHref>
          <Button>
            <Typography variant="h6">{button.label}</Typography>
          </Button>
        </Link>
      );
    });
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar variant="dense">
        <Link href="/" passHref>
          <Button color="inherit">
            <Image
              src="/android-chrome-512x512.png"
              width="50rem"
              height="50rem"
            />
          </Button>
        </Link>
        <div style={{ paddingLeft: "2rem" }}>{renderButtons()}</div>
        <FormControlLabel
          style={{ marginLeft: "auto" }}
          control={
            <Switch
              checked={darkMode}
              onChange={() => switchTheme(!darkMode)}
              name="darkmode"
              color="secondary"
            />
          }
          label=""
        />
        <DarkIcon />
      </Toolbar>
    </AppBar>
  );
}
