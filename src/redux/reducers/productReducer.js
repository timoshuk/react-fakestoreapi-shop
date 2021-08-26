const initialState = {
  load: true,
  requestError: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return { ...state, load: true, requestError: false };
    case "GET_PRODUCTS_REQUEST_SUCCESS":
      return {
        ...state,
        load: false,
        requestError: false,
        products: action.payload,
      };
    case "GET_PRODUCTS_REQUEST_ERROR":
      return {
        ...state,
        load: false,
        requestError: true,
      };
    default:
      return state;
  }
};

export default productReducer;
