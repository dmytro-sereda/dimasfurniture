import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  decreaseItemCount,
  deleteItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CartItemContainer,
  ItemImage,
  ButtonContainer,
  TextName,
  TextQuantity,
  TextPrice,
  DeleteButton,
} from "./cart-item.styles";

const CartItem = ({ item, addItemToCart, decreaseItemCount, deleteItem }) => {
  return (
    <CartItemContainer>
      <ItemImage src={item.imageUrl} />
      <TextName>{item.name}</TextName>
      <TextQuantity>
        <ButtonContainer onClick={() => decreaseItemCount(item)}>
          -
        </ButtonContainer>{" "}
        {item.quantity}
        <ButtonContainer onClick={() => addItemToCart(item)}>+</ButtonContainer>
      </TextQuantity>
      <TextPrice>{item.price}$</TextPrice>
      <DeleteButton onClick={() => deleteItem(item)} />
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  decreaseItemCount: (item) => dispatch(decreaseItemCount(item)),
  deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
