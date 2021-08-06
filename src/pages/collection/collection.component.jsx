import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import ShoppingItem from "../../components/shopping-item/shopping-item";

import {
  CollectionTitle,
  ItemsContainer,
  CollectionPageContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <ItemsContainer>
        {collection.items.map((i) => (
          <ShoppingItem key={i.id} item={i} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
