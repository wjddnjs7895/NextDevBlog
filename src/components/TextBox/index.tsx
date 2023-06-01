import React from "react";
import styled, { css } from "styled-components";
import { type TextProps } from "../../constants/types";

export default function TextBox(TextInfo: TextProps) {
  return <TextStyled {...TextInfo}>{TextInfo.children}</TextStyled>;
}

const TextStyled = styled.div<TextProps>`
  ${({ fontSize, fontColor = "black", fontWeight = "normal" }) => css`
    font-size: ${fontSize};
    color: ${fontColor};
    font-weight: ${fontWeight};
  `}
`;
