"use client";

import { useState } from "react";

function Rating() {
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);
   return (
      <>
         <div className="flex">
            {
               [...Array(5)].map((star, index) =>
                  <span
                     key={index}
                     className={"w-6 h-6 block cursor-pointer"}
                     onClick={() => setRating(index)}
                     onMouseEnter={() => setHover(index)}
                     onMouseLeave={() => setHover(rating)}
                  >
                     <svg className="w-full h-full">
                        <path
                           d="M 10 16 L 12 10 L 7  6 L 13 6 L 15 1 L 17 6 L 23 6 L 18 10 L 20 16 L 15 12 L 10 16 Z"
                           stroke="rgb(250, 204, 21)"
                           fill={index <= hover ? "rgb(250, 204, 21)" : "transparent"}
                        />
                     </svg>
                  </span>
               )
            }
         </div>
         <div className="text-xs ml-2 text-gray-400"><i>Your Rating : {rating + 1}</i></div>
         <div className="text-xs ml-2 text-gray-400"><i>Overall Rating : 4.7</i></div>
      </>
   );
};

export default Rating;