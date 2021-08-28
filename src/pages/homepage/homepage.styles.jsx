import styled from "styled-components";

import backgroundImage from "../../assets/ellipse.png";
import CustomButton from "../../components/custom-button/custom-button";

import {
  Container,
  Heading1,
  Paragraph,
} from "../../overall-styles/overall-styles.styles";

export const FirstSection = styled.section`
  height: 110vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  margin-top: -14.7rem;
  margin-bottom: 15rem;

  @media only screen and (max-width: 56.25em) {
    height: 100%;
  }
`;

export const FirstSectionContainer = styled.div`
  padding-top: 14.7rem;
  display: flex;
  justify-content: space-between;
  height: 100%;

  ${Container}

  @media only screen and (max-width: 107.5em) {
    padding: 14.7rem 4rem 0 4rem;
  }

  @media only screen and (max-width: 34.375em) {
    display: block;
  }
`;

export const MainHeading = styled.h1`
  ${Heading1}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const SectionParagraph = styled.p`
  ${Paragraph}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  margin-top: 28.4rem;
  margin-bottom: 34rem;

  @media only screen and (max-width: 34.375em) {
    margin: 10rem auto;
  }
`;

export const FirstSectionButton = styled(CustomButton)`
  @media only screen and (max-width: 34.375em) {
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  align-self: start;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  @media only screen and (max-width: 28.125em) {
    margin-bottom: -4rem;
  }
`;

export const ImageOne = styled.img`
  width: 45rem;
  height: 66.6rem;
  position: absolute;
  right: 0;
  top: 10rem;
  transition: all 0.4s;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.1);
  z-index: 100;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 56.25em) {
    width: 40rem;
    height: 57rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 34rem;
    height: 51rem;
  }

  @media only screen and (max-width: 34.375em) {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto;
  }
`;
export const ImageTwo = styled.img`
  width: 49.6rem;
  height: 33.5rem;
  position: absolute;
  right: 22.6rem;
  top: 53.8em;
  transition: all 0.4s;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.1);
  z-index: 101;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 56.25em) {
    width: 44rem;
    height: 30rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 38rem;
    height: 24rem;
  }

  @media only screen and (max-width: 34.375em) {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  @media only screen and (max-width: 28.125em) {
    margin-top: 4rem;
  }
`;
