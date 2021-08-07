import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/logo.svg";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 172rem;
  margin: 0 auto;
  padding: 4.3rem 0;
  align-items: center;

  @media only screen and (max-width: 107.5em) {
    padding: 4.3rem 4rem;
  } ;
`;

export const MenuLeftAndRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 50%;
  margin-right: 8.6rem;

  @media only screen and (max-width: 21.875em) {
    margin-right: 3rem;
  }
`;

export const Logo = styled(Icon)`
  width: 100%;
  height: 100%;
`;
