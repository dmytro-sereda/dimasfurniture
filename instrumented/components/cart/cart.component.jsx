import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartContainer,
  Overlay,
  Popup,
  CloseButton,
  ItemsInfo,
  CartItemChar,
  CheckoutContainer,
  TotalText,
  TotalValue,
  CartHeading,
  ItemsContainer,
} from "./cart.styles";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button";

import { toggleCart } from "../../redux/cart/cart.actions";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cart.selectors";

const Cart = ({ toggleCart, isHidden, cartItems }) => {
  return (
    <CartContainer isHidden={isHidden}>
      <Overlay onClick={toggleCart} />
      <Popup>
        <CartHeading>Cart</CartHeading>
        <CloseButton onClick={toggleCart}>&#10005;</CloseButton>
        <ItemsInfo>
          <CartItemChar>Picture</CartItemChar>
          <CartItemChar>Name</CartItemChar>
          <CartItemChar>Quantity</CartItemChar>
          <CartItemChar>Price</CartItemChar>
          <CartItemChar>Remove</CartItemChar>
        </ItemsInfo>
        <ItemsContainer className="items-container">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
        <CheckoutContainer>
          <TotalText>
            Total: $<TotalValue className="total">{cartItems.reduce((acc, i) => acc + +i.price * i.quantity, 0)}</TotalValue>
          </TotalText>
          <CustomButton mainColor={true} size="small">
            order
          </CustomButton>
        </CheckoutContainer>
      </Popup>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isHidden: selectCartHidden,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
