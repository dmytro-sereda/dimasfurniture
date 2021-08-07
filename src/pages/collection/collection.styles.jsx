import styled from "styled-components";
import {
  Heading2,
  Container,
} from "../../overall-styles/overall-styles.styles";

export const CollectionPageContainer = styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`;

export const CollectionTitle = styled.h2`
  ${Heading2}
  margin-bottom: 4.3rem;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5rem;
  justify-items: center;

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: 1fr;
  }
`;
