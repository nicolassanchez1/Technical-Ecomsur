import { types } from "../types/types";

const initialState = {
  products: [],
  product: {},
  checkedItems: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case types.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case types.SET_CHECKED_ITEMS:
      return {
        ...state,
        checkedItems: action.payload,
      };
    default:
      return state;
  }
};
