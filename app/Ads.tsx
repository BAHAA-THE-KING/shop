"use client";

import { useEffect, useState } from 'react'
import Image from 'next/image';
import image0 from "@/public/sofa.webp";
import image1 from "@/public/toys.jpg";
import image2 from "@/public/detergants.jpg";
import normal from './components/styles/normal';

const products = [
   {
      id: 11,
      name: "sofa",
      image: image0,
      description: "Confort sofas."
   },
   {
      id: 12,
      name: "children toys",
      image: image1,
      description: "toys for children under 12."
   },
   {
      id: 13,
      image: image2,
      name: "New detergants",
      description: "The best house cleaners."
   }
];

const Ads = () => {
   const [autoSlide, setAutoSlide] = useState(0);
   useEffect(
      () => {
         const inter = setInterval(
            () => setAutoSlide(val => (val + 1) % products.length),
            2500
         );
         return () => clearInterval(inter);
      }
   );

   return (
      <div className='w-full p-4 flex flex-row justify-center items-start'>
         <div className='w-4/5' style={{ height: "CALC(100vh - 9rem)" }}>
            <Image src={products[autoSlide].image} alt='Product' className='w-full h-full' />
         </div>
         <div className='w-1/5 flex flex-col justify-start items-stretch text-center' style={{ height: "CALC(100vh - 9rem)" }}>
            {
               products.map(
                  (e, i) =>
                     <div
                        key={e.name}
                        className={`
                                    p-1
                                    m-1

                                    ${normal}
                                    
                                    ${i === autoSlide ? "bg-purple-600 text-slate-50" : ""}
                                    `}
                        onClick={e => setAutoSlide(i)}
                     >
                        {e.name}
                     </div>
               )
            }
         </div>
      </div >
   );
}

export default Ads;