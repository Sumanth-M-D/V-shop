import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, ROWS_PER_PAGE } from "../config/config.js";
import useProductsPerRow from "../custom_hooks/useProductsPerRow.jsx";

// Initial state for products
const initialState = {
  products: [],
  status: "idle", // idle | loading | success | fail
  error: "",
  currentPage: 1, //For Pagination
  productsPerRow: 1, // For adjusting products per page according to screen sizes
  totalPages: 0,
  currentPageProducts: [],
};

// Fetch products of certain category from an API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const { categories, activeCategoryIndex } = getState().categories;

    const activeCategory = categories[activeCategoryIndex];
    const response = await fetch(
      `${BASE_URL}/products/category/${activeCategory}`
    );
    const data = await response.json();

    return data;
  }
);

const calculateCurrentPageProducts = (state) => {
  const productsPerPage = state.productsPerRow * ROWS_PER_PAGE;
  const startIdx = (state.currentPage - 1) * productsPerPage;
  state.currentPageProducts = state.products.slice(
    startIdx,
    startIdx + productsPerPage
  );
};

// Calculate total pages based on current products and productsPerRow
const calculateTotalPages = (state) => {
  const productsPerPage = state.productsPerRow * ROWS_PER_PAGE;
  state.totalPages = Math.ceil(state.products.length / productsPerPage);
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductsPerRow(state, action) {
      state.productsPerRow = action.payload;
      calculateTotalPages(state);
      calculateCurrentPageProducts(state);
    },

    incrementCurrentPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
        calculateCurrentPageProducts(state);
      }
    },

    decrementCurrentPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
        calculateCurrentPageProducts(state);
      }
    },

    updateCurrentPage(state, action) {
      state.currentPage = Number(action.payload);
      calculateCurrentPageProducts(state);
    },

    resetCurrentPage(state) {
      state.currentPage = 1;
      calculateCurrentPageProducts(state);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;

        // Update total pages
        calculateTotalPages(state);

        calculateCurrentPageProducts(state);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "fail";
        state.error = "Unable to load products. Please try again later";
      });
  },
});

export const {
  updateProductsPerRow,
  incrementCurrentPage,
  decrementCurrentPage,
  updateCurrentPage,
  resetCurrentPage,
} = productSlice.actions;

export default productSlice.reducer;
