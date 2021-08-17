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
        <div>
          <Link href="/cabinet" passHref>
            <Button>
              <Typography variant="h6">Le cabinet</Typography>
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button>
              <Typography variant="h6">Les soins</Typography>
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button>
              <Typography variant="h6">Info pratiques</Typography>
            </Button>
          </Link>
        </div>
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
