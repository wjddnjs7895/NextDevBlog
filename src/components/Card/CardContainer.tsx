import React from "react";
import styled from "styled-components";
import { getWidthPixel } from "../../utils/responsive";
import Card from ".";
import Blank from "../Blank";

export default function CardContainer() {
  return (
    <ContainerStyled>
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <Card width={getWidthPixel(400)} height={getWidthPixel(350)} />
      <BlankCard width={getWidthPixel(400)} height={getWidthPixel(350)} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: ${getWidthPixel(1000)};
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BlankCard = styled(Blank)`
  margin: ${getWidthPixel(10)};
`;
