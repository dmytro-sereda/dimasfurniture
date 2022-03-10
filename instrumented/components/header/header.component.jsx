import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectIsMenuHidden } from "../../redux/menu/menu.selectors";
import { signInStart, signOutStart } from "../../redux/user/user.actions";
import { toggleMenu } from "../../redux/menu/menu.actions";

import {
  HeaderContainer,
  MenuLeftAndRightContainer,
  LogoContainer,
  Logo,
  Overlay,
} from "./header.styles";

import CustomButton from "../custom-button/custom-button";
import CartButton from "../cart-button/cart-button.component";
import Navigation from "../navigation/navigation.component";
import Hamburger from "../hamburger/hamburger.component";

const Header = ({
  currentUser,
  signInStart,
  signOut,
  isHidden,
  toggleMenu,
}) => (
  <HeaderContainer>
    <Overlay isHidden={isHidden} onClick={toggleMenu} />

    <MenuLeftAndRightContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Navigation color={"dark"} isHidden={isHidden} isTopMenu={true} />
    </MenuLeftAndRightContainer>

    <MenuLeftAndRightContainer>
      {currentUser ? (
        <CustomButton mainColor={false} onClick={signOut}>
          {" "}
          Sign out
        </CustomButton>
      ) : (
        <CustomButton mainColor={false} onClick={signInStart}>
          Sign in with google
        </CustomButton>
      )}

      <CartButton />

      <Hamburger />
    </MenuLeftAndRightContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectIsMenuHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: () => dispatch(signInStart()),
  signOut: () => dispatch(signOutStart()),
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
