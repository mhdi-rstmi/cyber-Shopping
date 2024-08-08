import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productsSlice";
import sortReducer from "./sortSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    sort: sortReducer,
  },
});

export default store;
