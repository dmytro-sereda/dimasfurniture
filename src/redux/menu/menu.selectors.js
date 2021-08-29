import { createSelector } from "reselect";

export const selectMenu = (state) => state.menu;

export const selectIsMenuHidden = createSelector(
  [selectMenu],
  (menu) => menu.isMenuHidden
);
