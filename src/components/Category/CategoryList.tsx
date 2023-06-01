import React from "react";
import styled from "styled-components";
import Category from ".";
import { getWidthPixel } from "../../utils/responsive";
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
        src={MainLogo}
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
  width: ${getWidthPixel(260)};
  height: 100vh;
  box-shadow: 4px 0px 4px 0px #0000004d;
  align-items: center;
`;

const ListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LogoStyled = styled.img`
  width: ${getWidthPixel(130)};
  height: ${getWidthPixel(130)};
  margin: ${getWidthPixel(30)};
`;

const DividerStyled = styled.div`
  width: ${getWidthPixel(180)};
  border: 1px solid #a9a9a9;
  margin-bottom: 20vh;
  border-radius: 1px;
`;
