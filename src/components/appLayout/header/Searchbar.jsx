import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

function Searchbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="sm:order-none order-last w-[600px] sm:w-80 md:w-96 lg:w-[500px] flex justify-center ">
      {showSearch && (
        <input
          placeholder="Search Product..."
          type="text"
          className="text-sm px-4 py-2 w-full  h-10  borderPrimary focus:outline-none"
        ></input>
      )}
      <button
        className="px-3 py-auto bg-primary self-stretch items-stretch h-10 borderPrimary hover:scale-105 "
        onClick={() => setShowSearch(true)}
      >
        <VscSearch color={"white"} className="text-xl " />
      </button>
    </div>
  );
}

export default Searchbar;
