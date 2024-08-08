import axios from "axios";
import { baseURL } from "../utils/apiURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  productsCategory: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      });
  },
});

export const fetchAsyncAllCategories = createAsyncThunk(
  "allCategories",
  async () => {
    try {
      const response = await axios(`${baseURL}/category-list`);
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncProductsOfCategory = createAsyncThunk(
  "productsOfCategory",
  async (categoryName) => {
    try {
      const respons = await axios.get(`${baseURL}/category/${categoryName}`);
      const data = respons.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsOfCategory = (state) =>
  state.category.productsCategory;

export default categorySlice.reducer;
