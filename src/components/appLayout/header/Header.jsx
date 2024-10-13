import Topactions from "./Topactions";
import Logo from "../../general/Logo";
import Searchbar from "./Searchbar";
import WishlistBtn from "./WishlistBtn";
import CartBtn from "./CartBtn";

function Header() {
  return (
    <header className=" mb-6 ">
      <Topactions />

      <div className="flex justify-between items-center gap-y-6 px-2 flex-wrap ">
        <Logo />
        <Searchbar />

        <div className="flex gap-6">
          <WishlistBtn />
          <CartBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
