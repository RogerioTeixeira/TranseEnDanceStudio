/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      200: theme.colors?.primary200,
      800: theme.colors?.primary800,
      card: theme.colors?.primaryCard,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      200: theme.colors?.secondary200,
      800: theme.colors?.secondary800,
      card: theme.colors?.secondaryCard,
    },
    card:{
      primary: theme.colors?.primaryCard,
      secondary: theme.colors?.secondaryCard,
      beforeBgColor1: theme.colors?.cardBeforeBgColor1,
      afterBgColor1: theme.colors?.cardAfterBgColor1,
      beforeBgColor2: theme.colors?.cardBeforeBgColor2,
      afterBgColor2: theme.colors?.cardAfterBgColor2,
      beforeBgColor3: theme.colors?.cardBeforeBgColor3,
      afterBgColor3: theme.colors?.cardAfterBgColor3,
      borderColor: theme.colors?.cardBorderColor,
      bgColor1: theme.colors?.cardBgColor1,
      bgColor2: theme.colors?.cardBgColor2,
      iconBgColor1: theme.colors?.cardIconBgColor1,
      iconBgColor2: theme.colors?.cardIconBgColor2,
      iconBgColor3: theme.colors?.cardIconBgColor3,
      iconBgColor4: theme.colors?.cardIconBgColor4,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark
    },
    orange: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark
    },
    dark: {
      light: theme.colors?.darkTextPrimary,
      main: theme.colors?.darkLevel1,
      dark: theme.colors?.darkLevel2,
      800: theme.colors?.darkBackground,
      900: theme.colors?.darkPaper
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      dark: theme.textDark,
      hint: theme.colors?.grey100
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  };
}
