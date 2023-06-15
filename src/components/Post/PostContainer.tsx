import React from "react";
import styled from "styled-components";
import Post from ".";

export default function PostContainer() {
  return (
    <ContainerStyled>
      <Post title="Test Post" text="testing post example content" />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: 85vw;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
