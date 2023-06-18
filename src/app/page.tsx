"use client";

import React from "react";
import styled from "styled-components";
import CategoryList from "../components/Category/CategoryList";
import PostContainer from "../components/Post/PostContainer";
import CardContainer from "../components/Card/CardContainer";
import BlogHeader from "../components/Header/BlogHeader";
import { useSelector } from "react-redux";
import { type RootState } from "../modules";
import { useIsMobile } from "@/utils/hooks";

export default function App() {
  const isMobile = useIsMobile();
  const setting = useSelector((state: RootState) => state.setting);
  return (
    <PageStyled>
      {isMobile ? null : (
        <RowStyled>
          <CategoryList />
          {setting.isPost ? (
            <ColStyled>
              <PostContainer />
            </ColStyled>
          ) : (
            <ColStyled>
              <BlogHeader />
              <CardContainer />
            </ColStyled>
          )}
        </RowStyled>
      )}
    </PageStyled>
  );
}

const PageStyled = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const ColStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
