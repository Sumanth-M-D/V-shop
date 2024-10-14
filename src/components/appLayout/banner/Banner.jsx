import { RxHamburgerMenu } from "react-icons/rx";

import { TbBulb } from "react-icons/tb";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";

function Banner() {
  const [isCategoryListVisible, setCategoryListVisible] = useState(true);

  const toggleCategoryList = () => {
    if (window.innerWidth > 768) return;
    setCategoryListVisible(!isCategoryListVisible);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) setCategoryListVisible(false);
      else setCategoryListVisible(true);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black text-xs  sm:text-sm flex flex-wrap md:flex-nowrap gap-y-1 w-full ">
      <button
        className=" flex gap-2 w-2/4 md:w-[20%] items-center bg-primary py-3 ml-2 p-3 "
        onClick={toggleCategoryList}
        aria-label="Toggle Categories"
      >
        <RxHamburgerMenu />
        <span>Browse categories</span>
      </button>
      {isCategoryListVisible && <CategoryList />}

      <div className="flex items-center  md:w-[20%]">
        <div className=" text-secondary flex gap-2 items-center justify-center pl-3 md:border-l-2 border-solid border-secondary w-full">
          <TbBulb className="text-primary" />
          <span>Clearance upto 30% off</span>
        </div>
      </div>
    </nav>
  );
}

export default Banner;
