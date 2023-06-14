import React from "react";
import styled, { css } from "styled-components";
import { type CardProps } from "../../constants/types";
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
        <TextBox fontSize={"2rem"} fontWeight="bold">
          {CardInfo.title}
        </TextBox>
        <TextBox fontSize={"1.5rem"}>{CardInfo.text}</TextBox>
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
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  border: 2px solid ${palette.border_gray};
`;

const ImageStyled = styled.div`
  border-radius: 5px 15px 0px 0px;
  width: 90%;
  height: 60%;
  margin: 15px;
  background-color: gray;
`;

const TextContainerStyled = styled.div`
  position: relative;
  width: 90%;
  margin-left: 15px;
  margin-right: 15px;
  height: 25%;
`;
