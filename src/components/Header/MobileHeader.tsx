import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";

export default function MobileHeader() {
  return (
    <HeaderStyled>
      <TextBoxStyled fontSize={"2rem"}>Dev Blog</TextBoxStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  width: 85vw;
  height: 4rem;
  box-shadow: 4px 0px 4px 0px #0000004d;
`;

const TextBoxStyled = styled(TextBox)`
  padding-left: 10px;
`;
