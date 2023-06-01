import { type ReactNode } from "react";
import { type PaletteKeyTypes } from "./palette";

export interface TextProps {
  fontSize: string;
  fontColor?: PaletteKeyTypes;
  fontWeight?: string;
  children?: ReactNode;
}

export interface CardProps {
  width: string;
  height: string;
  title?: string;
  text?: string;
}

export interface PostProps {
  title: string;
  text: string;
}
