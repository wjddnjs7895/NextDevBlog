import React from "react";
import styled, { css } from "styled-components";
import { type CardProps } from "../../constants/types";
import { getWidthPixel } from "../../utils/responsive";
import { palette } from "../../constants/palette";
import TextBox from "../TextBox";
import { useDispatch } from "react-redux";
import { setPost } from "../../modules/setting";

export default function Card(CardInfo: CardProps) {
  const dispatch = useDispatch();
  return (
    <CardStyled {...CardInfo} onClick={() => dispatch(setPost(true))}>
      <ImageStyled />
      <TextContainerStyled>
        <TextBox fontSize={getWidthPixel(32)} fontWeight="bold">
          {CardInfo.title}
        </TextBox>
        <TextBox fontSize={getWidthPixel(20)}>{CardInfo.text}</TextBox>
      </TextContainerStyled>
    </CardStyled>
  );
}

const CardStyled = styled.div<CardProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
  margin: ${getWidthPixel(10)};
  border-radius: ${getWidthPixel(15)};
  box-shadow: 0px 4px 4px #00000040;
  border: 2px solid ${palette.border_gray};
`;

const ImageStyled = styled.div`
  border-radius: 5px 15px 0px 0px;
  width: ${getWidthPixel(370)};
  height: 60%;
  margin: ${getWidthPixel(15)};
  background-color: gray;
`;

const TextContainerStyled = styled.div`
  position: relative;
  width: ${getWidthPixel(370)};
  margin-left: ${getWidthPixel(15)};
  margin-right: ${getWidthPixel(15)};
  height: 25%;
`;
