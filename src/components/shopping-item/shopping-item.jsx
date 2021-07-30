import React from "react";

import {
  ItemContainer,
  ItemTitle,
  CharsList,
  CharsItem,
  CharsItemData,
  ShoppingItemButton,
} from "./shopping-item.styles";

const ShoppingItem = () => {
  return (
    <ItemContainer>
      <ItemTitle>White wolf</ItemTitle>
      <CharsList>
        <CharsItem>
          Size: <CharsItemData>25cm x 100cm</CharsItemData>
        </CharsItem>
        <CharsItem>
          Material: <CharsItemData>Wood & Fur</CharsItemData>
        </CharsItem>
        <CharsItem>
          Producer: <CharsItemData>Ikea</CharsItemData>
        </CharsItem>
        <CharsItem>
          Price: <CharsItemData>25$</CharsItemData>
        </CharsItem>
      </CharsList>
      <ShoppingItemButton mainColor={true} size="small">
        Add to cart
      </ShoppingItemButton>
    </ItemContainer>
  );
};

export default ShoppingItem;
