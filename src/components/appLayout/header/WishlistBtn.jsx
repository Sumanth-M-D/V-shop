import { FaRegHeart } from "react-icons/fa";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function WishlistBtn() {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.authentication);
  const { wishlistProducts } = useSelector((state) => state.wishlist);

  function handleClick() {
    if (isAuthenticated) {
      navigate("/wishlist");
    } else {
      navigate("authentication");
    }
  }

  return (
    <button
      className="flex flex-col items-center px-2 relative hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative">
        <FaRegHeart className="text-2xl" />
        <Badge number={wishlistProducts.length} />
      </div>
      <p className="text-[10px]">Wishlist</p>
    </button>
  );
}

export default WishlistBtn;
