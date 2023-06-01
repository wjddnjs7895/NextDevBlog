type PaletteType = Record<string, string>;

export const palette: PaletteType = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#06C755",
  blue: "#0000FF",
  indigo: "#17325B",
  violet: "#EE82EE",
  white: "#FFFFFF",
  black: "#000000",
  none: "#ffffff00",
  border_gray: "#BDBDBD",
  font_gray: "#6D6D6D",
};

export type PaletteKeyTypes = keyof typeof palette;
