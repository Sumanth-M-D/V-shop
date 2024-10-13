import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

function List() {
  const { wishlistProducts } = useSelector((state) => state.wishlist);

  return (
    <div className=" mt-10 ">
      <ListHeader />
      <div className="flex flex-col gap-5">
        {wishlistProducts.map((product) => (
          <ListItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default List;
