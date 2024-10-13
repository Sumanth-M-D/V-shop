import Header from "../components/appLayout/header/Header";
import Footer from "../components/appLayout/Footer";

import Banner from "../components/appLayout/banner/Banner";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="max-w-full">
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
