import styled from "styled-components";

import {
  Container,
  Heading2,
  Paragraph,
} from "../../overall-styles/overall-styles.styles";

export const AboutPageContainer = styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 28.125em) {
    display: block;
  }
`;

export const AboutHeading = styled.h2`
  ${Heading2}

  @media only screen and (max-width: 73.125em) {
    line-height: 1;
  }
`;

export const AboutImage = styled.img`
  display: block;
  margin-right: 5rem;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 73.125em) {
    width: 41.3rem;
    height: 53.7rem;
  }

  @media only screen and (max-width: 28.125em) {
    margin: 0 auto;
    margin-bottom: 4rem;
  }
`;

export const AboutText = styled.p`
  ${Paragraph}
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid #eee;
  text-align: left;

  @media only screen and (max-width: 73.125em) {
    column-count: 1;
    column-rule: none;
    font-size: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    margin-top: 2rem;
  }

  span {
    color: #df0000;
  }
`;
