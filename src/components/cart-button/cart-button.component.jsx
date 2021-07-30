import React from "react";

import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { CartButtonContainer } from "./cart-button.styles";

const Cart = ({ toggleCart }) => {
  return (
    <CartButtonContainer onClick={toggleCart}>
      <CartIcon />
    </CartButtonContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(Cart);
