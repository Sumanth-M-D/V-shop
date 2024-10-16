import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/shoppingCartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddtoCartBtn({ product, extraClass }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.authentication);

  // Function to handle adding the product to the cart
  function handleAddtoCart() {
    if (isAuthenticated) {
      dispatch(addProductToCart(product)); // Dispatch action to add product to cart
      toast("Item has been added to cart");
    } else navigate("/authentication"); // Navigate to authentication page if user is not authenticated
  }

  return (
    <button className={`cta ${extraClass}`} onClick={handleAddtoCart}>
      <MdOutlineAddShoppingCart />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddtoCartBtn;
