export const addItem = (itemToAdd, cartItems) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((i) =>
      i.id === existingCartItem.id
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : i
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItemCount = (itemToDecrease, cartItems) => {
  const existingCartItem = cartItems.find((i) => i.id === itemToDecrease.id);

  if (existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems.filter((item) => item.id !== existingCartItem.id);
};
