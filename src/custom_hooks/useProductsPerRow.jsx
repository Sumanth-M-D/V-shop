import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetCurrentPage,
  updateProductsPerRow,
} from "../features/productSlice";

const useProductsPerRow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleWindowResize() {
      const windowSize = window.innerWidth;

      dispatch(resetCurrentPage());

      if (windowSize >= 1216) {
        dispatch(updateProductsPerRow(4));
      } else if (windowSize >= 800) {
        dispatch(updateProductsPerRow(3));
      } else if (windowSize >= 375) {
        dispatch(updateProductsPerRow(2));
      } else {
        dispatch(updateProductsPerRow(1));
      }
    }

    // Initial setup
    handleWindowResize();

    // Add resize event listener
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [dispatch]);
};

export default useProductsPerRow;
