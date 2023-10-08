"use client";

import { useEffect, useState } from 'react'
import Image from 'next/image';
import image0 from "@/public/Screenshot_1.png";
import image1 from "@/public/Qpzduo8fafs.png";
import image2 from "@/public/first tot.jpg";
import normal from './styles/normal';

const images = [
   {
      image: image0,
      name: "calendar"
   },
   {
      image: image1,
      name: "dogs"
   },
   {
      image: image2,
      name: "sussy idk"
   }
];

const Ads = () => {
   const [autoSlide, setAutoSlide] = useState(0);
   useEffect(
      () => {
         const inter = setInterval(
            () => setAutoSlide(val => (val + 1) % images.length),
            2500
         );
         return () => clearInterval(inter);
      }
   );

   return (
      <div className='w-full p-4 flex flex-row justify-center items-start'>
         <div className='w-4/5' style={{ height: "CALC(100vh - 6rem)" }}>
            <Image src={images[autoSlide].image} alt='Product' style={{ maxHeight: "100%" }} />
         </div>
         <div className='w-1/5 flex flex-col justify-start items-stretch text-center' style={{ height: "CALC(100vh - 6rem)" }}>
            {
               images.map(
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