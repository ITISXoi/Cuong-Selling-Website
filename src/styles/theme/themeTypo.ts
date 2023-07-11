import { PaletteMode } from "@mui/material";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const { typography, breakpoints } = createTheme({
  typography: { fontSize: 14 },

});

const LANG_MAPPING: Record<string, string> = {
  en: "Rubik, sans-serif",
  ch: "Space Grotesk",
  ja: "Space Grotesk",
};

/* Override ⚛️ typo*/
export const getTypoStyles = (
  mode: PaletteMode,
  lang: string
): ThemeOptions["typography"] => ({
  fontSize: 16,
  fontFamily: [
    LANG_MAPPING[lang] ?? "Inter",
    "Arial",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  h1: {
    fontWeight: 600,
    fontSize: typography.pxToRem(66),
    lineHeight: typography.pxToRem(72),
    // '@media (max-width:1024px)': {
    //   fontSize: '1.5rem',
    // },
  },
  h2: {
    fontWeight: 600,
    fontSize: typography.pxToRem(50),
    lineHeight: typography.pxToRem(55),
    '@media (max-width:1024)': {
      fontSize: '1.5rem',
    },
  },
  h3: {
    fontWeight: 600,
    fontSize: typography.pxToRem(40),
    lineHeight: typography.pxToRem(45),
  },
  h4: {
    fontWeight: 600,
    fontSize: typography.pxToRem(24),
    lineHeight: typography.pxToRem(30),
  },
  h5: {
    fontWeight: 600,
    fontSize: typography.pxToRem(20),
    lineHeight: typography.pxToRem(25),
  },
  h6: {
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(22),
  },
  subtitle1: {
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(25),
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(21),
  },
  body1: {
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(24),
    fontWeight: 400,
  },
  body2: {
    fontSize: typography.pxToRem(18),
    lineHeight: typography.pxToRem(24),
    fontWeight: 400,
  },
  button: {
    fontSize: typography.pxToRem(16),
    fontWeight: 400,
  },
  caption: {
    fontSize: typography.pxToRem(12),
    lineHeight: typography.pxToRem(18),
    [breakpoints.down("xs")]: {
      fontSize: typography.pxToRem(10),
    },
  },
  overline: {
    fontSize: typography.pxToRem(16),
    fontWeight: 400,
    textTransform: "uppercase",
  },
});
