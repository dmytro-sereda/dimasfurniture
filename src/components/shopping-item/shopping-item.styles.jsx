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
    z-index: 100;
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

      @media only screen and (max-width: 56.25em) {
        display: none;
      }
    }

    * {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 93.75em) {
    width: 35rem;
    height: 48.5rem;
  }

  @media only screen and (max-width: 73.125em) {
    width: 30rem;
    height: 40rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 27rem;
    height: 100%;
    border-radius: 4rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    background-image: none;
    overflow: hidden;
    padding-bottom: 1.9rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 50rem;
    height: 100%;
  }

  @media only screen and (max-width: 28.125em) {
    width: 70%;
  }
`;

export const ShoppingItemButton = styled(CustomButton)`
  opacity: 0;
  z-index: 100;

  @media only screen and (max-width: 56.25em) {
    opacity: 1;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3.6rem;
    margin: 1rem 0;
  }
`;

export const ItemTitle = styled.h3`
  ${Heading3}
  z-index: 100;

  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
    opacity: 1;
    font-size: 3.2rem;
    color: #515151;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    font-size: 5rem;
  }
`;

export const CharsList = styled.ul`
  opacity: 0;
  list-style: none;
  margin: 2rem 0 2.4rem 0;
  z-index: 100;
  transition: all 0.4s;

  @media only screen and (max-width: 56.25em) {
    opacity: 1;
    margin: 1rem 0 2rem 0;
  }
`;

export const CharsItem = styled.li`
  color: white;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;

  @media only screen and (max-width: 56.25em) {
    color: #515151;
    text-align: left;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 28.125em) {
    font-size: 3.5rem;
  }
`;

export const CharsItemData = styled.span`
  font-weight: 300;
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height: 30rem; */
  display: none;
  /* background-image: url(${(props) => props.imageUrl}); */
  background-size: cover;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }

  @media only screen and (max-width: 43.75em) {
    height: 100%;
    /* height: 50rem; */
  }
`;

export const ItemImagePhones = styled.img`
  display: none;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`;
