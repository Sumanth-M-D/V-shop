import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateActiveCategory } from "../features/categoriesSlice";
import { fetchProducts } from "../features/productSlice";
import {
  fetchProductDetails,
  setProductData,
  setProductId,
  resetProductDetails,
} from "../features/productDetailsSlice";

import ProductNav from "../components/productDetails/ProductNav";
import Loading from "../components/general/Laoding";
import Error from "../components/general/Error";
import MainDetails from "../components/productDetails/MainDetails";
import AdditionalDetails from "../components/productDetails/additinalDetails/AdditionalDetails";

function ProductDetail() {
  let { id } = useParams();
  id = Number(id);

  const {
    products,
    status: productsStatus,
    error: productsError,
  } = useSelector((state) => state.products);

  const { categories, activeCategoryIndex } = useSelector(
    (state) => state.categories
  );

  const {
    productData,
    error: productDetailsError,
    status: productDetailsStatus,
    productId,
  } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  const showProductDetails =
    productsStatus === "success" && productDetailsStatus === "success";

  // Fetch product details
  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      dispatch(setProductData(product)); // Dispatch setProductData action if product found
    } else {
      dispatch(setProductId(id)); // Set product ID in state
      dispatch(fetchProductDetails(id)); // Fetch product details if not in local state
    }
    return () => {
      dispatch(resetProductDetails());
    };
  }, [id, products, dispatch]);

  // Update active category only when necessary
  useEffect(() => {
    if (productData.category && categories.length > 0) {
      const categoryIndex = categories.indexOf(productData.category);

      // Only dispatch if the category is different from the current active category
      if (categoryIndex >= 0 && categoryIndex !== activeCategoryIndex) {
        dispatch(updateActiveCategory(categoryIndex));
        dispatch(fetchProducts());
      }
    }
  }, [productData.category, categories, dispatch, activeCategoryIndex]);

  if (productsStatus === "loading" || productDetailsStatus === "loading") {
    return <Loading />;
  }

  if (productDetailsStatus === "fail") {
    return <Error errorMessage={productDetailsError} />;
  }

  if (productsStatus === "fail") {
    return <Error errorMessage={productsError} />;
  }

  return (
    <>
      {showProductDetails && (
        <main className="py-8 px-10">
          <ProductNav id={id} />
          <MainDetails />
          <AdditionalDetails rating={productData.rating} />
        </main>
      )}
    </>
  );
}

export default ProductDetail;
