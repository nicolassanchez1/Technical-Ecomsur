import { types } from "../types/types";

export const setCart = (item) => ({
  type: types.SET_CART,
  payload: item,
});
