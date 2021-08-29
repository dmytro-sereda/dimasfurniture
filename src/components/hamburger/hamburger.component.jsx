import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleMenu } from "../../redux/menu/menu.actions";
import { selectIsMenuHidden } from "../../redux/menu/menu.selectors";

import { HamburgerContainer, HamburgerLine } from "./hamburger.styles";

const Hamburger = ({ toggleMenu, isMenuHidden }) => (
  <HamburgerContainer onClick={toggleMenu}>
    <HamburgerLine isHidden={isMenuHidden}></HamburgerLine>
  </HamburgerContainer>
);

const mapStateToProps = () =>
  createStructuredSelector({
    isMenuHidden: selectIsMenuHidden,
  });

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
