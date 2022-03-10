import styled, { css } from "styled-components";

import { ReactComponent as Trash } from "../../assets/trash.svg";

const TextStyles = css`
  font-size: 2rem;
  font-weight: 400;
  width: 23%;
`;

export const CartItemContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 2.6rem 0;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid #515151;
  }
`;

export const ItemImage = styled.img`
  width: 23%;
  padding-right: 1.5rem;
`;

export const ButtonContainer = styled.span`
  cursor: pointer;
  font-weight: 700;
  font-size: 2.2rem;
`;

export const TextName = styled.p`
  ${TextStyles}
`;

export const TextQuantity = styled.p`
  ${TextStyles}
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
`;

export const QuantityValue = styled.p`
  font-weight: 700;
  font-size: 2.2rem;
  margin: 0 .3rem;
`;

export const TextPrice = styled.p`
  ${TextStyles}
  padding-left: .5rem;
`;

export const DeleteButton = styled(Trash)`
  margin: 0 auto;
  cursor: pointer;
  width: 3rem;
  height: 3.45rem;
`;
