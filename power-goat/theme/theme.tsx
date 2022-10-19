import { createTheme, responsiveFontSizes } from "@mui/material";

//Color palette from Nitor
const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  tuftBush: "#FFD1C1",
  cloudySky: "#ADA9A1",
  pureWhite: "#FFFFFF",
  tintNeroBlack10: "rgba(21, 21, 21, 0.1)",
  tintNeroBlack60: "rgba(21, 21, 21, 0.6)",
  tintCloudSky10: "rgba(173, 169, 161, 0.1)",
  tintCloudySky20: "rgba(173, 169, 161, 0.2)",
  link: "#00A7E0",
  info: "#02A2B9",
  success: "#1BA345",
  warning: "#FEC001",
  error: "#DE3E44",
  disabled: "#999999",
  tintDisabled32: "rgba(153,153,153, 0.32)",
};

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: colors.rockBlack,
      },
      secondary: {
        main: colors.malibuBlue,
      },
      action: {
        active: colors.rockBlack,
        hover: colors.tuftBush,
        selected: colors.malibuBlue,
        disabled: colors.cloudySky,
        focus: colors.neonBlue,
      },
      background: {
        default: colors.pureWhite,
        paper: colors.tintCloudySky20,
      },
      text: {
        primary: colors.rockBlack,
        secondary: colors.rockBlack,
        disabled: colors.tintDisabled32,
      },
      divider: colors.cloudySky,
      error: {
        main: colors.error,
      },
      warning: {
        main: colors.warning,
      },
      info: {
        main: colors.info,
      },
      success: {
        main: colors.success,
      },
    },

    typography: {
      h1: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "56px",
        lineHeight: 1.14,
        letterSpacing: "0px",
        textAlign: "left",
      },
      h2: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: 1.3,
        letterSpacing: "0px",
        textAlign: "left",
      },
      h3: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: 1.14,
        letterSpacing: "0px",
        textAlign: "left",
      },
      h4: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: 1.2,
        letterSpacing: "0px",
        textAlign: "left",
      },
      h5: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "17px",
        lineHeight: 1.18,
        letterSpacing: "0px",
        textAlign: "left",
      },
      h6: {
        fontFamily: "Reckless Neue, serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "15px",
        lineHeight: 1.18,
        letterSpacing: "0px",
        textAlign: "left",
      },
      subtitle1: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: 1.75,
        letterSpacing: "0.15px",
        textAlign: "left",
      },
      subtitle2: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: 1.57,
        letterSpacing: "0.1px",
        textAlign: "left",
      },
      body1: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: 1.5,
        letterSpacing: "-0.25px",
        textAlign: "left",
      },
      body2: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: 1.43,
        letterSpacing: "0px",
        textAlign: "left",
      },
      button: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: 1.23,
        letterSpacing: "0.5px",
        textAlign: "left",
        textTransform: "uppercase",
      },
      caption: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: 1.66,
        letterSpacing: "0.4px",
        textAlign: "left",
      },
      overline: {
        fontFamily: "Roobert, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: 2.66,
        letterSpacing: "1px",
        textAlign: "left",
        textTransform: "uppercase",
      },
    },

    // breakpoints
    // components
    // direction
    // mixins
    // shadows
    // shape
    // spacing
    // transitions
    // zIndex
  })
);

// color: {
//   neroBlack: "#151515",
//   rockBlack: "#26273A",
//   neonBlue: "#6056EB",
//   malibuBlue: "#6DC4E2",
//   tuftBush: "#FFD1C1",
//   cloudySky: "#ADA9A1",
//   pureWhite: "#FFFFFF",
//   tintNeroBlack10: "rgba(21, 21, 21, 0.1)",
//   tintNeroBlack60: "rgba(21, 21, 21, 0.6)",
//   tintCloudSky10: "rgba(173, 169, 161, 0.1)",
//   tintCloudySky20: "rgba(173, 169, 161, 0.2)",
//   ui: {
//     link: "#00A7E0",
//     info: "#02A2B9",
//     success: "#1BA345",
//     warning: "#FEC001",
//     error: "#DE3E44",
//     disabled: "#999999",
//     tintDisabled32: "rgba(153,153,153, 0.32)",
//   },
// },
/*   font: {
    family: {
      roobert: "Roobert, sans-serif",
      recklessNeue: "Reckless Neue, serif",
      firaCode: "Fira Code, monospace",
    },
    size: {
      xxxs: "16px",
      xxs: "18px",
      xs: "20px",
      sm: "24px",
      md: "32px",
      lg: "40px",
      xl: "48px",
      xxl: "56px",
      xxxl: "64px",
      xxxxl: "80px",
    },
    lineHeight: {
      xxxs: "16px",
      xxs: "18px",
      xs: "20px",
      sm: "24px",
      md: "32px",
      lg: "40px",
      xl: "48px",
      xxl: "56px",
      xxxl: "72px",
      xxxxl: "80px",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  letterSpacing: {
    normal: "normal",
    small: "0.008em",
    basic: "0.01em",
    wide: "0.02em",
    wider: "0.04em",
    xw: "0.06em",
    xw2: "0.08em",
  },
 */
