import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AuthRoutes from "./pages/AuthRoutes";
// import Signup from "./components/authRoutes/Signup";
// import Login from "./components/authRoutes/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoutes from "./components/general/ProtectedRoutes";

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
    </BrowserRouter>
  );
}

export default App;
