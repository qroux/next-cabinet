import createDataContext from "./createDataContext";
import { actionTypes } from "../actions/app/appTypes";
import { switchTheme, fetchDarkMode } from "../actions/app/appActions";
import Cookies from "js-cookie";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      console.log("dans reducer, action.payload=", action.payload);
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  AppReducer,
  { switchTheme, fetchDarkMode },
  { lang: "fr", darkMode: true }
);
