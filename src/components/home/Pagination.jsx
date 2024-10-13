import { useDispatch, useSelector } from "react-redux";
import {
  decrementCurrentPage,
  incrementCurrentPage,
  updateCurrentPage,
} from "../../features/productSlice";

function Pagination() {
  const { currentPage, totalPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const min = Math.floor((currentPage - 1) / 3) * 3 + 1;
  const max = Math.min(min + 2, totalPages);
  const pageNumbers = [];

  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages;

  for (let i = min; i <= max; i++) {
    pageNumbers.push(i);
  }

  function handlePrev() {
    dispatch(decrementCurrentPage());
  }

  function handleNext() {
    dispatch(incrementCurrentPage());
  }

  function handleJump(num) {
    dispatch(updateCurrentPage(num));
  }

  return (
    <div className="flex justify-center py-8 mb-14 text-base">
      <div className="flex gap-8 text-black">
        <button
          className={
            noPrev ? "text-secondary--shade__0" : "hover:font-semibold"
          }
          onClick={handlePrev}
        >
          &larr; Prev
        </button>

        <div className="flex gap-6">
          <div className="flex gap-4">
            {pageNumbers.map((num) => (
              <button
                className={`hover:font-semibold ${
                  num === currentPage ? "text-primary--shade__1 font-bold" : ""
                }`}
                key={num}
                onClick={() => handleJump(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="text-secondary--shade__0">of {totalPages}</p>
        </div>

        <button
          className={
            noNext ? "text-secondary--shade__0 " : "hover:font-semibold"
          }
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
