import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

/* Override ⚛️ components*/
export const getComponentStyles = (
  mode: PaletteMode
): ThemeOptions["components"] => ({
  MuiButton: {
    styleOverrides: {
      root: {
        padding: "8px 15px",
        borderRadius: "10px",
        textTransform: "initial",
        boxShadow: "none",
        lineHeight: 1.7,
      },
      outlinedPrimary: {
        border: "none",
        transition: "all .5s ease-out",
        boxShadow: "none",
        background:
          "linear-gradient(to left, var(--secondary-color) 50%, #CFE5FC 50%) right",
        backgroundSize: "200% 100%",
        color: "var(--primary-color)",
        "&:hover": {
          border: "none",
          transition: "0.5s all ease",
          backgroundPosition: "left",
          boxShadow: "none",
        },
      },
      containedSecondary: {
        background:
          "linear-gradient(to left, var(--primary-color) 50%, var(--black-color) 50%) right",
        backgroundSize: "200% 100%",
        transition: "all .5s ease-out",
        "&:hover": {
          transition: "0.5s all ease",
          backgroundPosition: "left",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        boxShadow: "0px 0px 40px rgba(56, 152, 226, 0.3)",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        "&.MuiAvatarGroup-avatar": {
          width: "32px",
          height: "32px",
        },
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "&.MuiInputLabel-root": { color: "var(--black-color)" },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "var(--black-color)",
      },
      shrink: {
        color: "var(--black-color)",
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "var(--black-color)",
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(0,0,0, 0.3)",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        color: "secondary.main",
        borderRadius: "10px",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiInputBase-root": {
          borderRadius: "10px",
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: "#2f2f2f",
        opacity: 0.7,
        "&.MuiFormControlLabel-label": {
          fontSize: "12px",
        },
        "& .MuiSvgIcon-root": {
          height: 20,
          width: 20,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: 16,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        backgroundColor: "#f0f6fe",
        color: "#1967d2",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: "var(--black-color)"
      },
    },
  },
});
