"use client";

import { useState } from "react";
import Stars from "../Stars";

function Rating() {
   const [rating, setRating] = useState(0);
   return (
      <>
         <Stars rating={rating} setRating={setRating} />
         <div className="text-xs ml-2 text-gray-400"><i>Your Rating : {rating + 1}</i></div>
         <div className="text-xs ml-2 text-gray-400"><i>Overall Rating : 4.7</i></div>
      </>
   );
};

export default Rating;