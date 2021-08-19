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
  const cookie = Cookies.get("DARK_MODE");
  if (!cookie || cookie === "true") return;
  if (cookie === "false") {
    dispatch({ type: actionTypes.SWITCH_THEME, payload: false });
  }
};
