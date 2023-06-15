import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import { palette } from "../../constants/palette";
import { useDispatch } from "react-redux";
import { setCategory, setPost } from "../../modules/setting";

import BookMarkIcon from "../../../public/icons/bookmark.svg";
import { CATEGORY_LIST } from "@/constants/settings";
import { useRouter } from "next/navigation";

export default function Category({
  idx,
  title,
  isSelected,
}: {
  idx: number;
  title: string;
  isSelected: boolean;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <BoxStyled
      onClick={() => {
        console.log("before");
        dispatch(setCategory(idx));
        dispatch(setPost(false));
        router.push(CATEGORY_LIST[idx].uri);
        console.log("after");
      }}
    >
      <TextBox
        fontSize={isSelected ? "2rem" : "1.5rem"}
        fontColor={isSelected ? palette.black : palette.font_gray}
        fontWeight={isSelected ? "bold" : "regular"}
      >
        {title}
      </TextBox>
      {isSelected ? <IconStyled /> : null}
    </BoxStyled>
  );
}

const BoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    background-color: #f3f3f3;
  }
  @media ${(props) => props.theme.desktop} {
    height: 70px;
  }
`;

const IconStyled = styled(BookMarkIcon)`
  position: absolute;
  @media ${(props) => props.theme.desktop} {
    width: 30px;
    height: 30px;
    right: -5px;
    margin-top: 8px;
  }
`;
