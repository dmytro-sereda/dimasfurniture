import styled from "styled-components";

import { Container } from "../../overall-styles/overall-styles.styles";

import { ReactComponent as Icon } from "../../assets/logo-light.svg";

export const FooterContainer = styled.footer`
  background-color: #515151;
  display: flex;
  justify-content: space-between;
  padding: 6rem;
`;

export const FooterItemsContainer = styled.div`
  width: 100%;
  ${Container}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCopyright = styled.p`
  font-weight: 300;
  color: white;
  font-size: 1.8rem;
`;

export const Logo = styled(Icon)`
  width: 6rem;
  height: 6rem;
`;
