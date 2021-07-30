import styled from "styled-components";

import backgroundImage from "../../assets/ellipse.png";

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
`;

export const FirstSectionContainer = styled.div`
  padding-top: 14.7rem;
  display: flex;
  justify-content: space-between;
  height: 100%;

  ${Container}
`;

export const MainHeading = styled.h1`
  ${Heading1}
`;

export const SectionParagraph = styled.p`
  ${Paragraph}
`;

export const TextContainer = styled.div`
  margin-top: 28.4rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  align-self: start;
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
`;
