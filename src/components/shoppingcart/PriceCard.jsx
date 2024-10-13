import { useDispatch, useSelector } from "react-redux";
import { updateShipping } from "../../features/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

function PriceCard() {
  const { cartProducts, shipping } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal =
    Math.ceil(
      cartProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ) * 100
    ) / 100;

  const shippingOptions = [
    { name: "free", value: 0, label: "Free Shipping" },
    { name: "standard", value: 10, label: "Standard" },
    { name: "express", value: 20, label: "Express" },
  ];

  function handleChangeShipping(e) {
    dispatch(updateShipping(Number(e.target.value)));
  }

  function continueShopping() {
    navigate("/");
  }

  return (
    <div className="w-72 mx-auto my-10 md:my-0">
      <div className="bg-secondary p-5 w-64 upperMd:w-72 flex flex-col gap-5 text-sm text-black">
        <h3 className="text-base border-b-[1px] pb-3 mb-3 font-medium">
          Cart Total
        </h3>
        <div className="flex justify-between font-medium border-b-[1px] border-secondary--shade__0 pb-3">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex flex-col gap-3 mb-3 pb-3 border-b-[1px] border-secondary--shade__0">
          <div className="mb-2">
            <p className="font-medium mb-2">Shipping</p>
            <div className="flex flex-col gap-2 pl-2">
              {shippingOptions.map((option) => (
                <div key={option.name} className="flex justify-between ">
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value={option.value}
                      checked={shipping === option.value}
                      onChange={handleChangeShipping}
                      id={option.name}
                    />
                    <label
                      htmlFor={option.name}
                      className="flex justify-between"
                    >
                      {option.label}
                    </label>
                  </div>
                  <span className="justify-self-end">${option.value}.00</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-1"> Estimate for your country</p>
            <p className="text-secondary--shade__1 border-b-[1px] inline">
              change address
            </p>
          </div>
        </div>
        <div className="flex justify-between text-primary--shade__1 font-semibold text-base">
          <p>Total</p>
          <p>${subtotal + shipping}</p>
        </div>
        <div>
          <button className="cta">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">
        <button
          className="py-2 w-full border-[1px] border-secondary--shade__0  hover:shadow-md"
          onClick={continueShopping}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
