import styled from "styled-components";

import { Heading3 } from "../../overall-styles/overall-styles.styles";
import CustomButton from "../custom-button/custom-button";

export const ItemContainer = styled.div`
  border-radius: 4.9rem;
  width: 40rem;
  height: 53.7rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .item-btn {
    z-index: 500;
    opacity: 0;
  }

  &::after {
    border-radius: 4.9rem;
    content: "";
    position: absolute;
    background-color: black;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all 0.4s;
  }

  &:hover {
    &::after {
      opacity: 0.7;
    }

    * {
      opacity: 1;
    }
  }
`;

export const ShoppingItemButton = styled(CustomButton)`
  opacity: 0;
  z-index: 500;
`;

export const ItemTitle = styled.h3`
  ${Heading3}
`;

export const CharsList = styled.ul`
  opacity: 0;
  list-style: none;
  margin: 2rem 0 2.4rem 0;
  z-index: 500;
  transition: all 0.4s;
`;

export const CharsItem = styled.li`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

export const CharsItemData = styled.span`
  font-weight: 300;
`;
