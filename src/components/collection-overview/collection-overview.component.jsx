import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { CollectionOverviewContainer } from "./collection-overview.styles";

import CollectionPreview from "../collection-preview/collection-preview";

import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {Object.values(collections).map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
