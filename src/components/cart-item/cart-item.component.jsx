import React from "react";

import {
  CartItemContainer,
  ItemImage,
  ButtonContainer,
  TextName,
  TextQuantity,
  TextPrice,
  DeleteButton,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <ItemImage imageUrl={item.imageUrl} />
      <TextName>{item.name}</TextName>
      <TextQuantity>
        <ButtonContainer>-</ButtonContainer> {item.quantity}{" "}
        <ButtonContainer>+</ButtonContainer>
      </TextQuantity>
      <TextPrice>{item.price}$</TextPrice>
      <DeleteButton />
    </CartItemContainer>
  );
};

export default CartItem;
