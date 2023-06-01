import React from "react";
import styled from "styled-components";
import { type PostProps } from "../../constants/types";
import TextBox from "../TextBox";
import Blank from "../Blank";
import { getHeightPixel } from "../../utils/responsive";

export default function Post(PostInfo: PostProps) {
  return (
    <ContainerStyled>
      <Blank height={getHeightPixel(20)} />
      <TitleContainerStyled>
        <TextBox fontSize="2.5rem">{PostInfo.title}</TextBox>
      </TitleContainerStyled>
      <TextBox fontSize="20px">{PostInfo.text}</TextBox>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainerStyled = styled.div`
  width: 90%;
`;
