import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";

export default function BlogHeader() {
  return (
    <HeaderStyled>
      <TextBoxStyled fontSize={"2rem"}>Dev Blog</TextBoxStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  width: 85vw;
  height: 4rem;
`;

const TextBoxStyled = styled(TextBox)`
  padding-left: 10px;
`;
