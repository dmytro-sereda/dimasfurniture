import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  Container,
  Heading2,
} from "../../overall-styles/overall-styles.styles";

export const CollectionPreviewContainer = styled.section`
  ${Container}

  @media only screen and (max-width: 107.5em) {
    padding: 0 2rem;
  }
`;

export const CollectionPreviewHeading = styled(Link)`
  ${Heading2}
  text-decoration: none;
  color: #515151;

  @media only screen and (max-width: 43.75em) {
    font-size: 7rem;
    display: block;
    text-align: center;
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.8rem;

  @media only screen and (max-width: 43.75em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 5rem;
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: 1fr;
    grid-gap: 8rem;
  }
`;
