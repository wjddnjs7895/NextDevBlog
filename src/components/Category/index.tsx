import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import { getHeightPixel, getWidthPixel } from "../../utils/responsive";
import { palette } from "../../constants/palette";
import { useDispatch } from "react-redux";
import { setCategory, setPost } from "../../modules/setting";

import BookMarkIcon from "../../../public/icons/main_logo.svg";

export default function Category({
  idx,
  title,
  isSelected,
}: {
  idx: number;
  title: string;
  isSelected: boolean;
}) {
  const dispatch = useDispatch();
  return (
    <BoxStyled
      onClick={() => {
        dispatch(setCategory(idx));
        dispatch(setPost(false));
      }}
    >
      <TextBox
        fontSize={isSelected ? "2rem" : "1.5rem"}
        fontColor={isSelected ? palette.black : palette.font_gray}
        fontWeight={isSelected ? "bold" : "regular"}
      >
        {title}
      </TextBox>
      {isSelected ? <IconStyled src={BookMarkIcon} /> : null}
    </BoxStyled>
  );
}

const BoxStyled = styled.div`
  width: 100%;
  height: ${getHeightPixel(66)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const IconStyled = styled.img`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
  position: absolute;
  right: -${getWidthPixel(10)};
  margin-top: ${getWidthPixel(8)};
`;
