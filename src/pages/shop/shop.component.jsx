import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";
import { ShopPageContainer } from "./shop.styles";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const ShopPage = ({ collections }) => {
  return (
    <ShopPageContainer>
      {collections.map((collection, index) => (
        <CollectionPreview key={index} collection={collection} />
      ))}
    </ShopPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
