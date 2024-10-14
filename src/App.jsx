import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AuthRoutes from "./pages/AuthRoutes";
import ShoppingCart from "./pages/ShoppingCart";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoutes from "./components/general/ProtectedRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="authentication" element={<AuthRoutes />}></Route>
          <Route
            path="cart"
            element={
              <ProtectedRoutes>
                <ShoppingCart />
              </ProtectedRoutes>
            }
          />
          <Route
            path="wishlist"
            element={
              <ProtectedRoutes>
                <Wishlist />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </BrowserRouter>
  );
}

export default App;
