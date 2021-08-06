import React from "react";

import {
  AboutPageContainer,
  AboutInfoContainer,
  AboutImage,
  AboutText,
  AboutHeading,
} from "./about.styles";

import OwnerPicture from "../../assets/owner.jpg";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutInfoContainer>
        <AboutImage src={OwnerPicture} alt="owner" />
        <div>
          <AboutHeading>Some information about us</AboutHeading>
          <AboutText>
            My name is Dmytro and I am the owner of this furniture selling
            network. We are an authorized reseller for many companies, such as
            IKEA, Woodman and RichFurniture. The goal is to provide good quality
            furniture from famous brands with affordable prices in countries,
            where this company do not locate. For 10 years we have been
            successfully supplying such countries as Ukraine, Russia, Slovenia,
            Serbia and many more. Our network consists of 20 internationally
            spread stores. We do as well offer online shopping and client
            support via our web-site. Anyways, less words, go and enjoy endless
            furniture items!{" "}
            <span>
              {" "}
              Disclaimer: This page was only created for development purposes,
              therefore any information considering actual items, prices or
              brands is irrelevant.
            </span>
          </AboutText>
        </div>
      </AboutInfoContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
