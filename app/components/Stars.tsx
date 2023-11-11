import { useState } from "react";

function Stars(
   { rating, setRating }: {
      rating: number,
      setRating: Function | null
   }
) {
   const [hover, setHover] = useState(0);
   return (
      <div className="flex">
         {
            [...Array(5)].map((star, index) =>
               <span
                  key={index}
                  className={"w-6 h-6 block" + (setRating ? " cursor-pointer" : "")}
                  onClick={() => setRating && setRating(index)}
                  onMouseEnter={() => setRating && setHover(index)}
                  onMouseLeave={() => setRating && setHover(rating)}
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
   );
}

export default Stars;