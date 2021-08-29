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

  @media only screen and (max-width: 34.375em) {
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.p`
  font-weight: 300;
  color: white;
  font-size: 1.8rem;

  @media only screen and (max-width: 34.375em) {
    margin-top: 4rem;
    font-size: 4rem;
  }
`;

export const Logo = styled(Icon)`
  width: 6rem;
  height: 6rem;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 4rem;
  }
`;
