import styled from "styled-components";
import {
  Heading2,
  Container,
} from "../../overall-styles/overall-styles.styles";

export const CollectionPageContainer = styled.div`
  ${Container}
  padding: 4rem 0;
`;

export const CollectionTitle = styled.h2`
  ${Heading2}
  margin-bottom: 4.3rem;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5rem;
`;
