import React from "react";
import styled from "styled-components";
import { getHeightPixel } from "../../utils/responsive";
import TextBox from "../TextBox";

export default function BlogHeader() {
  return (
    <HeaderStyled>
      <TextBoxStyled fontSize={getHeightPixel(30)}>Dev Blog</TextBoxStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  width: 100%;
  height: ${getHeightPixel(50)};
`;

const TextBoxStyled = styled(TextBox)`
  padding-left: ${getHeightPixel(10)};
`;
