import React from "react";

import {
  ItemContainer,
  ItemTitle,
  CharsList,
  CharsItem,
  CharsItemData,
  ShoppingItemButton,
} from "./shopping-item.styles";

const ShoppingItem = ({ item }) => {
  const { imageUrl, material, price, name, producer, size } = item;
  return (
    <ItemContainer imageUrl={imageUrl}>
      <ItemTitle>{name}</ItemTitle>
      <CharsList>
        <CharsItem>
          Size: <CharsItemData>{size}</CharsItemData>
        </CharsItem>
        <CharsItem>
          Material: <CharsItemData>{material}</CharsItemData>
        </CharsItem>
        <CharsItem>
          Producer: <CharsItemData>{producer}</CharsItemData>
        </CharsItem>
        <CharsItem>
          Price: <CharsItemData>{price}$</CharsItemData>
        </CharsItem>
      </CharsList>
      <ShoppingItemButton mainColor={true} size="small">
        Add to cart
      </ShoppingItemButton>
    </ItemContainer>
  );
};

export default ShoppingItem;
