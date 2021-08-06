import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  Container,
  Heading2,
} from "../../overall-styles/overall-styles.styles";

export const CollectionPreviewContainer = styled.section`
  ${Container}
`;

export const CollectionPreviewHeading = styled(Link)`
  ${Heading2}
  text-decoration: none;
  color: #515151;
`;

export const ItemsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.8rem;
`;
