import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export const paletteColorsDark = {
  primary: "#003952",
  secondary: "#01638D",
  error: "#FB9F89",
  background: "#1b262c",
  textPrimary: "#F8F3F2",
  textSecondary: "#9e115c",
  // paper: "#f5f5f5",
};

export const paletteColorsLight = {
  primary: "#6886c5",
  secondary: "#ffbf99",
  error: "#E44C65",
  background: "#ededed",
  textPrimary: "#474747",
  textSecondary: "#F8F3F2",
  // paper: "#e6e6e6",
};

export const darkTheme = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;

  return createMuiTheme({
    typography: {
      fontFamily: ["Montserrat"].join(","),
    },
    palette: {
      type: dark ? "dark" : "light",

      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
      },
      error: {
        main: paletteColors.error,
      },
      background: {
        default: paletteColors.background,
        // paper: paletteColors.paper,
      },
      text: {
        primary: paletteColors.textPrimary,
        secondary: paletteColors.textSecondary,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            transition: "all 0.3s linear",
          },
        },
      },
    },
  });
};
