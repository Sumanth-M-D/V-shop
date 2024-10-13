import { FiShoppingCart } from "react-icons/fi";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CartBtn() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const { cartProducts } = useSelector((state) => state.shoppingCart);

  function handleClick() {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      navigate("authentication");
    }
  }

  return ( 
    <button
      className="flex flex-col items-center px-2 hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative">
        <FiShoppingCart className="text-2xl" />
        <Badge number={cartProducts.length} />
      </div>
      <p className="text-[10px]">Cart</p>
    </button>
  );
}

export default CartBtn;
