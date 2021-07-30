import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signInStart, signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  MenuLeftAndRightContainer,
  LogoContainer,
} from "./header.styles";

import CustomButton from "../custom-button/custom-button";
import CartButton from "../cart-button/cart-button.component";
import Navigation from "../navigation/navigation.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = ({ currentUser, signInStart, signOut }) => (
  <HeaderContainer>
    <MenuLeftAndRightContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Navigation color={true} />
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
    </MenuLeftAndRightContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: () => dispatch(signInStart()),
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
