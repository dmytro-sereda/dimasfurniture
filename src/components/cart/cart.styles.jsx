import styled from "styled-components";

import {
  Heading2,
  OverlayStyles,
} from "../../overall-styles/overall-styles.styles";

export const CartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isHidden ? "none" : "block")};
  position: fixed;
  z-index: 499;
`;

export const Overlay = styled.div`
  ${OverlayStyles}
`;

export const Popup = styled.div`
  width: 110rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem 0;
  border-radius: 6rem;
  z-index: 502;

  @media only screen and (max-width: 28.125em) {
    width: 95%;
    padding: 2rem 2rem;
  }
`;

export const CartHeading = styled.h2`
  text-align: center;
  ${Heading2}
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 3rem;
  right: 5rem;
`;

export const ItemsContainer = styled.div`
  max-height: 62rem;
  overflow: scroll;
`;

export const ItemsInfo = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  border-bottom: 1px solid #515151;
  padding-bottom: 0.3rem;
  margin-top: 2rem;
`;

export const CartItemChar = styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  width: 23%;

  &:last-of-type {
    width: 8%;
  }
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const TotalText = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  margin-right: 4.8rem;
  display: flex;
  align-items: center;
`;

export const TotalValue = styled.p`
  font-size: 2.8rem;
`;