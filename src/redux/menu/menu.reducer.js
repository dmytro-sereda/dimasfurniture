import MenuActionTypes from "./menu.types";

const DEFAULT_STATE = {
  isMenuHidden: true,
};

const MenuReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU:
      return { ...state, isMenuHidden: !state.isMenuHidden };
    default:
      return state;
  }
};

export default MenuReducer;
