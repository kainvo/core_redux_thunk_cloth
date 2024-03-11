import fakeApi from "../../api";
import { ACTION_TYPES } from "../constants/action-types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeApi().get("")
      console.log("response", response);

      // dispatch
      dispatch({
        type: ACTION_TYPES.FETCH_PRODUCTS,
        payload: response.data
      })
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const fetchProduct = (productId) => {

  return async (dispatch) => {
    try {
      const response = await fakeApi().get(`/${productId}`)
      console.log("response product detail", response)

      //dispatch
      dispatch({
        type: ACTION_TYPES.FETCH_PRODUCT,
        payload: response.data
      })
    } catch (error) {
      console.log("error", error);
    }
  }
}

