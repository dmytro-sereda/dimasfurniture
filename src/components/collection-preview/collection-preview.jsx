import React from "react";

import {
  CollectionPreviewContainer,
  CollectionPreviewHeading,
  ItemsContainer,
} from "./collection-preview.styles";

import ShoppingItem from "../shopping-item/shopping-item";

const CollectionPreview = ({ collection }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewHeading to={`shop/${collection.url}`}>
        {collection.title}
      </CollectionPreviewHeading>
      <ItemsContainer>
        {collection.items
          .filter((_, index) => index < 4)
          .map((item) => (
            <ShoppingItem key={item.id} item={item} />
          ))}
      </ItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
