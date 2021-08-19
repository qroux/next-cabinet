import { actionTypes } from "./appTypes";
import Cookies from "js-cookie";
import { genExpiration } from "../utils";

export const switchTheme = (dispatch: Function) => async (current: any) => {
  dispatch({ type: actionTypes.SWITCH_THEME, payload: current });

  Cookies.set("DARK_MODE", current, {
    expires: genExpiration(),
    sameSite: "strict",
  });
};

export const fetchDarkMode = (dispatch: Function) => async () => {
  console.log("je fetch le cookie");
  const cookie = Cookies.get("DARK_MODE");
  console.log({ cookie });
  if (!cookie || cookie === "true")
    return console.log("pas de cookie, ou déjà en dark mode");
  if (cookie === "false") {
    console.log("light mode choisi");
    dispatch({ type: actionTypes.SWITCH_THEME, payload: false });
  }

  // const result = !cookie || cookie === "true" ? true : false;

  // if (result) dispatch({ type: actionTypes.SWITCH_THEME, payload: true });
};
