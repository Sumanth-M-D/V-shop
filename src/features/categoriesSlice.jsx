import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../config/config.js";

const initialState = {
  categories: [],
  activeCategoryIndex: "",
  status: "idle", // idle | loading | success | fail
  error: "",
};

// Fetch categories from an API
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();

    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateActiveCategory(state, action) {
      console.log(action.payload);
      state.activeCategoryIndex = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "fail";
        state.error = "Unable to load categories. Please try again later";
      });
  },
});

export const { updateActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;
