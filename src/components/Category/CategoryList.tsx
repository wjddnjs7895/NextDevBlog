import React from "react";
import styled from "styled-components";
import Category from ".";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../modules";
import { CATEGORY_LIST } from "../../constants/settings";

import MainLogo from "../../../public/icons/main_logo.svg";
import { setCategory, setPost } from "../../modules/setting";

export default function CategoryList() {
  const index = useSelector((state: RootState) => state.setting.index);
  const dispatch = useDispatch();
  return (
    <ContainerStyled>
      <LogoStyled
        onClick={() => {
          dispatch(setCategory(0));
          dispatch(setPost(false));
        }}
      />
      <DividerStyled />
      <ListContainerStyled>
        {CATEGORY_LIST.map((category) => {
          return (
            <Category
              key={category.id}
              idx={category.id}
              title={category.name}
              isSelected={index === category.id}
            />
          );
        })}
      </ListContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 4px 0px 4px 0px #0000004d;
  align-items: center;

  @media ${(props) => props.theme.desktop} {
    width: 300px;
  }}
`;

const ListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LogoStyled = styled(MainLogo)`
  @media ${(props) => props.theme.desktop} {
    width: 150px;
    height: 150px;
    margin: 30px;
  }}
`;

const DividerStyled = styled.div`
  border: 1px solid #a9a9a9;
  margin-bottom: 20vh;
  border-radius: 1px;
  @media ${(props) => props.theme.desktop} {
    width: 200px;
  }
`;
