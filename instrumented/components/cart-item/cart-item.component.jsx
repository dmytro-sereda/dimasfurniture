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
  QuantityValue
} from "./cart-item.styles";

const CartItem = ({ item, addItemToCart, decreaseItemCount, deleteItem }) => {
  return (
    <CartItemContainer className="cart-item">
      <ItemImage src={item.imageUrl} />
      <TextName>{item.name}</TextName>
      <TextQuantity>
        <ButtonContainer onClick={() => decreaseItemCount(item)}>
          -
        </ButtonContainer>
        <QuantityValue className="item-quantity">{item.quantity}</QuantityValue>
        <ButtonContainer onClick={() => addItemToCart(item)}>+</ButtonContainer>
      </TextQuantity>
      <TextPrice className="item-price">{item.price}$</TextPrice>
      <DeleteButton className="delete-btn" onClick={() => deleteItem(item)} />
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  decreaseItemCount: (item) => dispatch(decreaseItemCount(item)),
  deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
