import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../components/home/Pagination";
import ProductList from "../components/home/ProductList";
import Loading from "../components/general/Laoding";

import useProductsPerRow from "../custom_hooks/useProductsPerRow";
import Error from "../components/general/Error";
import WhatWeProvide from "../components/home/WhatWeProvide";
import { updateActiveCategory } from "../features/categoriesSlice";

function Home() {
  const { status: productStatus, error: productError } = useSelector(
    (state) => state.products
  );

  const {
    status: categoryStatus,
    activeCategoryIndex,
    error: categoryError,
  } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  // Use custom hook to handle products per row update based on screen size
  useProductsPerRow();

  useEffect(() => {
    if (categoryStatus === "success") {
      // set Default Activecategory
      if (activeCategoryIndex === "") {
        dispatch(updateActiveCategory(0));
      }
      dispatch(fetchProducts());
    }
  }, [dispatch, activeCategoryIndex, categoryStatus]);

  if (productStatus === "loading") {
    return <Loading />;
  }

  if (categoryStatus === "fail") {
    return <Error errorMessage={categoryError} />;
  }

  if (productStatus === "fail") {
    return <Error errorMessage={productError} />;
  }

  return (
    <main>
      <ProductList />
      <Pagination />
      <WhatWeProvide />
    </main>
  );
}

export default Home;
