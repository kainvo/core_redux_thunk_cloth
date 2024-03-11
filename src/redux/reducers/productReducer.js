import { ACTION_TYPES } from "../constants/action-types"

const initialState = {
  products: [],
  product: {},
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return { ...state, products: action.payload }
    case ACTION_TYPES.FETCH_PRODUCT:
      return { ...state, product: action.payload }
    default:
      return state
  }
}

export default productReducer;
