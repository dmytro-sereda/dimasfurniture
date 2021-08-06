import styled from "styled-components";

import {
  Container,
  Heading2,
  Paragraph,
} from "../../overall-styles/overall-styles.styles";

export const AboutPageContainer = styled.div`
  ${Container}
  padding: 4rem 0;
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutHeading = styled.h2`
  ${Heading2}
`;

export const AboutImage = styled.img`
  display: block;
  margin-right: 5rem;
  width: 100%;
  height: 100%;
`;

export const AboutText = styled.p`
  ${Paragraph}
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid #eee;
  text-align: left;

  span {
    color: #df0000;
  }
`;
