import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../utils/apiURL";

const initialState = {
  products: [],
  newProduct: [],
  bookMarksProducts: [],
  discountProducts: [],
  product: [],
  cartProducts: [],
  totalPrice: 0,
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      state.bookMarksProducts.push(action.payload);
    },
    removeBookMark: (state, action) => {
      const productId = action.payload;
      state.bookMarksProducts = state.bookMarksProducts.filter(
        (id) => id !== productId
      );
    },
    addCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeCart: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter((id) => id !== productId);
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncNewProducts.fulfilled, (state, action) => {
        state.newProduct = action.payload;
      })
      .addCase(fetchAsyncDiscountProducts.fulfilled, (state, action) => {
        state.discountProducts = action.payload;
      })
      .addCase(fetchAsyncAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const fetchAsyncAllProducts = createAsyncThunk(
  "allProducts",
  async () => {
    try {
      const respons = await axios.get(`${baseURL}?limit=0&skip=0`);
      const data = respons.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncNewProducts = createAsyncThunk(
  "newProducts",
  async () => {
    try {
      const respons = await axios.get(
        `${baseURL}?limit=24&select=title,price,thumbnail`
      );
      const data = respons.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncDiscountProducts = createAsyncThunk(
  "Discount",
  async () => {
    try {
      const res = await axios.get(`${baseURL}/category/smartphones?limit=4`);
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncProduct = createAsyncThunk(
  "getProduct",
  async (productId) => {
    try {
      const respons = await axios.get(`${baseURL}/${productId}`);
      const data = respons.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const {
  addBookMark,
  removeBookMark,
  addCart,
  removeCart,
  setTotalPrice,
} = productsSlice.actions;

export const getNewProducts = (state) => state.product.newProduct;
export const getBookMarksProducts = (state) => state.product.bookMarksProducts;
export const getDiscountProducts = (state) => state.product.discountProducts;
export const getAllProducts = (state) => state.product.products;
export const getProduct = (state) => state.product.product;
export const getCartProducts = (state) => state.product.cartProducts;
export const getTotalPrice = (state) => state.product.totalPrice;

export default productsSlice.reducer;
