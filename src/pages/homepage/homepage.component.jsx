import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import {
  FirstSection,
  MainHeading,
  SectionParagraph,
  TextContainer,
  FirstSectionContainer,
  ImageContainer,
  ImageOne,
  ImageTwo,
} from "./homepage.styles";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";

import CustomButton from "../../components/custom-button/custom-button";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectCollections } from "../../redux/shop/shop.selectors";
import Subscribe from "../../components/subscribe/subscribe.component";

const HomePage = ({ collections, history, match }) => {
  return (
    <div>
      <FirstSection imageUrl="../../../assets/ellipse.png">
        <FirstSectionContainer>
          <TextContainer>
            <MainHeading>Create the house of Your dreams</MainHeading>
            <SectionParagraph>
              With our furniture you can design your room, appartment or house
              any way you want.
            </SectionParagraph>
            <CustomButton
              to="/shop"
              onClick={() => history.push(`${match.path}shop`)}
              mainColor={true}
              size="large"
            >
              Go shopping
            </CustomButton>
          </TextContainer>

          <ImageContainer>
            <ImageOne src={image1} alt="Furniture Picture" />
            <ImageTwo src={image2} alt="Furniture Picture" />
          </ImageContainer>
        </FirstSectionContainer>
      </FirstSection>
      <CollectionPreview collection={collections["newest arrivals"]} />
      <Subscribe />
      <CollectionPreview collection={collections["most popular"]} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(withRouter(HomePage));
