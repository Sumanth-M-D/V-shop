import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Ratings({ rating }) {
  let numRating = rating.rate;
  const starRating = [];

  for (let i = 0; i < 5; i++) {
    // full star
    if (numRating >= 1) {
      starRating.push(<FaStar className="text-primary" key={i} />);
      numRating--;
      continue;
    }

    // Half star
    if (numRating > 0) {
      starRating.push(<FaStarHalfAlt className="text-primary" key={i} />);
      numRating = 0;
      continue;
    }

    // Empty star
    if (numRating === 0) {
      starRating.push(<FaRegStar className="text-primary" key={i} />);
    }
  }

  return <div className="flex text-sm items-center gap-1">{starRating}</div>;
}

export default Ratings;
