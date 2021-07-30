import React from "react";

import {
  FooterContainer,
  FooterItemsContainer,
  FooterCopyright,
} from "./footer.styles";
import { ReactComponent as Logo } from "../../assets/logo-light.svg";

import Navigation from "../navigation/navigation.component";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItemsContainer>
        <Logo />
        <Navigation color={"light"} />
        <FooterCopyright>2021 Made by Dmytro Sereda</FooterCopyright>
      </FooterItemsContainer>
    </FooterContainer>
  );
};

export default Footer;
