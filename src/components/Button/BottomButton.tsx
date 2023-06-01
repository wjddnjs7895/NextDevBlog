import React from "react";
import styled from "styled-components";
import { getHeightPixel, getWidthPixel } from "../../utils/responsive";
import { palette } from "../../constants/palette";
import TextBox from "../TextBox";
import ArrowIcon from "../../assets/triangle_arrow.svg";

export default function BottomButton({ text }: { text: string }) {
  return (
    <ButtonStyled>
      <IconStyled src={ArrowIcon} />
      <TextBox fontSize={getWidthPixel(15)} fontColor="white">
        {text}
      </TextBox>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${getWidthPixel(180)};
  height: ${getHeightPixel(40)};
  background-color: ${palette.indigo};
  position: absolute;
  bottom: 0;
  border-radius: ${getHeightPixel(40)} ${getHeightPixel(40)} 0px 0px;
  flex-direction: row;
  border: 0px;
`;

const IconStyled = styled.img`
  width: ${getWidthPixel(12)};
  height: ${getWidthPixel(12)};
  margin-right: ${getWidthPixel(10)};
`;
