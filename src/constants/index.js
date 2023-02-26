import { Dimensions, Platform, Appearance } from "react-native";

const { width, height } = Dimensions.get("window");
const scheme = Appearance.getColorScheme();

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

const theme = {
  dark: {
    colors: {
      CARD: Platform.select({
        ios: "rgba(242, 242, 242, 1)",
        android: "rgba(242, 242, 242, 1)",
        web: "rgba(242, 242, 242, 1)",
      }),
      OVERLAY: "rgba(0, 0, 0, 0.2)",
      BORDER: "rgba(60, 60, 67, 0.25)",
      TEXT_INPUT: "rgba(255, 255, 255, 1)",
      LABEL: Platform.select({
        ios: "rgb(0, 0, 0)",
        android: "rgb(0, 0, 0)",
        web: "rgb(0, 0, 0)",
      }),
      SYSTEM_BLUE: Platform.select({
        ios: "rgb(0, 122, 255)",
        android: "rgb(0, 122, 255)",
        web: "rgb(0, 122, 255)",
      }),
      SYSTEM_GRAY: Platform.select({
        ios: "rgb(209, 209, 214)",
        android: "rgb(209, 209, 214)",
        web: "rgb(209, 209, 214)",
      }),
    },
  },
  light: {
    colors: {
      CARD: Platform.select({
        ios: "rgba(242, 242, 242, 1)",
        android: "rgba(242, 242, 242, 1)",
        web: "rgba(242, 242, 242, 1)",
      }),
      OVERLAY: "rgba(0, 0, 0, 0.2)",
      BORDER: "rgba(60, 60, 67, 0.25)",
      TEXT_INPUT: "rgba(255, 255, 255, 1)",
      LABEL: Platform.select({
        ios: "rgb(0, 0, 0)",
        android: "rgb(0, 0, 0)",
        web: "rgb(0, 0, 0)",
      }),
      SYSTEM_BLUE: Platform.select({
        ios: "rgb(0, 122, 255)",
        android: "rgb(0, 122, 255)",
        web: "rgb(0, 122, 255)",
      }),
      SYSTEM_GRAY: Platform.select({
        ios: "rgb(209, 209, 214)",
        android: "rgb(209, 209, 214)",
        web: "rgb(209, 209, 214)",
      }),
    },
  },
};

export const VARIABLES = theme[scheme].colors;

export const TYPOGRAPHY = {
  SIZES: {
    small: 13,
    normal: Platform.select({ ios: 17, android: 16 }),
    large: 20,
  },
  WEIGHTS: {
    regular: "400",
    semibold: "500",
    bold: "600",
  },
};
