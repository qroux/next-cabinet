import createDataContext from "./createDataContext";
import { actionTypes } from "../actions/app/appTypes";
import { switchTheme, fetchDarkMode } from "../actions/app/appActions";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
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
