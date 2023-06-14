import React from "react";
import styled from "styled-components";
import Card from ".";
import Blank from "../Blank";

export default function CardContainer() {
  return (
    <CenterStyled>
      <ContainerStyled>
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <Card width={"400px"} height={"350px"} />
        <BlankCard width={"400px"} height={"350px"} />
        <BlankCard width={"400px"} height={"350px"} />
        <BlankCard width={"400px"} height={"350px"} />
        <BlankCard width={"400px"} height={"350px"} />
      </ContainerStyled>
    </CenterStyled>
  );
}

const CenterStyled = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
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
  margin: 10px;
`;
