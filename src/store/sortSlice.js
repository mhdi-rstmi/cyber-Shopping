import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortedProducts: [],
  selectedBrands: [],
  selectedCategory: [],
  statusProducts: [],
  priceValue: [0, 40000],
  showFeatures: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortedProducts: (state, action) => {
      state.sortedProducts = action.payload;
    },
    setPriceValue: (state, action) => {
      state.priceValue = action.payload;
    },
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setStatusProducts: (state, action) => {
      state.statusProducts = action.payload;
    },
    setShow: (state, action) => {
      state.showFeatures = action.payload;
    },
    setUnShow: (state, action) => {
      state.showFeatures = action.payload;
    },
  },
});

export const {
  setSortedProducts,
  setPriceValue,
  setSelectedBrands,
  setSelectedCategory,
  setStatusProducts,
  setShow,
  setUnShow,
} = sortSlice.actions;

export const getSortedProducts = (state) => state.sort.sortedProducts;
export const getPriceValue = (state) => state.sort.priceValue;
export const getSelectedBrand = (state) => state.sort.selectedBrands;
export const getSelectedCategory = (state) => state.sort.selectedCategory;
export const getStatusProducts = (state) => state.sort.statusProducts;
export const getShoFeatures = (state) => state.sort.showFeatures;

export default sortSlice.reducer;
