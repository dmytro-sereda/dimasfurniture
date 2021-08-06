import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collectionUrlParam ? collections[collectionUrlParam] : null
  );
