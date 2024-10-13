import { useState } from "react";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import ShippingAndReturns from "./ShippingAndReturns";

import ReviewList from "./Reviews";

function AdditionalDetails({ rating }) {
  const [activeElement, setActiveElement] = useState(0);

  const elements = [
    { title: "Description", element: <Description /> },
    { title: "Additional Information", element: <AdditionalInfo /> },
    { title: "Shipping & returns", element: <ShippingAndReturns /> },
    {
      title: `Reviews (${rating.count})`,
      element: <ReviewList rating={rating} />,
    },
  ];

  return (
    <div className="upperMd:py-10">
      <div className="grid grid-cols-2 justify-items-center  xs:flex xs:flex-nowrap xs:justify-around">
        {elements.map((ele, i) => (
          <button
            key={i}
            onClick={() => setActiveElement(i)}
            className={`py-4 px-2 font-semibold text-base ${
              activeElement === i ? "text-primary--shade__1 border-b-2" : ""
            }`}
          >
            {ele.title}
          </button>
        ))}
      </div>
      <div className="borderSecondary p-10">
        {elements[activeElement].element}
      </div>
    </div>
  );
}

export default AdditionalDetails;
