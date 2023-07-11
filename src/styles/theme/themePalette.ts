import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

/* Override ⚛️ palette*/
export const getPaletteStyles = (
  mode: PaletteMode
): ThemeOptions["palette"] => ({
  mode,
  primary: {
    main: "#2f2f2f",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#1967d2",
    contrastText: "#f0f6fe",
  },
  text: {
    primary: "#2f2f2f",
    secondary: "#FFFFFF",
  },
  error: {
    main: "#B16F5C",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#D6B557",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#6FA176",
    contrastText: "#FFFFFF",
  },
  background: {
    default: mode === "dark" ? "#FFFFFF" : "#FFFFFF",
    paper: mode === "dark" ? "#FFFFFF" : "#FFFFFF",
  },
});
