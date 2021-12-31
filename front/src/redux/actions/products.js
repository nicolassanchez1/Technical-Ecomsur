import axios from "axios";
import { types } from "../types/types";
import { URL } from "../../constants/Api";

export const setProducts = (product) => ({
  type: types.SET_PRODUCTS,
  payload: product,
});

export const setProduct = (product) => ({
  type: types.SET_PRODUCT,
  payload: product,
});

export const setCheckedItems = (items) => ({
  type: types.SET_CHECKED_ITEMS,
  payload: items,
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}`);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
