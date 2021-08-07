import React from "react";
import { connect } from "react-redux";

import {
  ItemContainer,
  ItemTitle,
  CharsList,
  CharsItem,
  CharsItemData,
  ShoppingItemButton,
  ItemImagePhones,
  ImageContainer,
} from "./shopping-item.styles";

import { addItemToCart } from "../../redux/cart/cart.actions";

const ShoppingItem = ({ item, addItemToCart }) => {
  const { imageUrl, material, price, name, producer, size } = item;
  return (
    <ItemContainer imageUrl={imageUrl}>
      <ImageContainer imageUrl={imageUrl}>
        <ItemImagePhones src={imageUrl} />
      </ImageContainer>
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
      <ShoppingItemButton
        mainColor={true}
        size="small"
        onClick={() => addItemToCart(item)}
      >
        Add to cart
      </ShoppingItemButton>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
