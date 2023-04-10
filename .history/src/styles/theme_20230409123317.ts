/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme, Theme as MaterialUITheme } from "@mui/material/styles"
import { alpha, lighten, darken } from "@mui/material"

declare module "@emotion/react" {
  interface Theme extends MaterialUITheme {}
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      loadingBackground: string
      loadingForeground: string
      alpha: {
        white: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        trueWhite: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        black: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
      }
    }
  }

  interface ThemeOptions {
    colors: {
      loadingBackground: string
      loadingForeground: string
      alpha: {
        white: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        trueWhite: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        black: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
      }
    }
  }
}

const themeColors = {
  black: "#223354",
  white: "#ffffff",
}

let theme = createTheme({
  colors: {
    loadingBackground: "#8f8f8f",
    loadingForeground: "#ecebeb",
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      trueWhite: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black,
      },
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
})

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      styleOverrides: {},
    },
    MuiCssBaseline: {
      styleOverrides: `
        a {
          color: ${theme.palette.primary.main};
          text-decoration: none;

          &:hover {
            color: ${theme.palette.action.hover};
            text-decoration: underline;
          }
        }
      `,
    },
  },
})

export default theme
