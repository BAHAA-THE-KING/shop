"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleButton } from "..";
import { useState } from "react";

const cartIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
   </svg>;
const filledCartIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
   </svg>;
const starIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
   </svg>;
const filledStarIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
   </svg>;
const dotsIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
   </svg>;
const filledDotsIcon =
   <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
   </svg>;

function ListItem(
   { product: { id, name, imageURL, description } }: {
      product: {
         id: number,
         name: string,
         imageURL: string | StaticImageData,
         description: string
      }
   }
) {
   const [finished, setFinished] = useState(false);
   return (
      <motion.div
         variants={
            {
               offscreen: {
                  x: -500,
                  opacity: 0.5
               },
               onscreen: {
                  x: 0,
                  opacity: 1,
                  transition: {
                     type: "spring",
                     bounce: 0.4,
                     duration: 0.8
                  }
               },
            }
         }
         initial={finished ? "onscreen" : "offscreen"}
         whileInView={"onscreen"}
         onAnimationComplete={() => setFinished(true)}
      >
         <li>
            <Link
               href={"/product/" + id}
               className="
                     h-32
                     p-1
                     m-1
                     bg-purple-50

                     border
                     border-purple-600
                     rounded-2xl

                     flex
                     flex-row
                     justify-between
                     items-center
                     flex-nowrap
                     
                     hover
                     hover:text-white
                     hover:bg-purple-500
                     "
            >
               <div className="w-2/3 h-full flex flex-row justify-start items-stretch">
                  <Image src={imageURL} alt={name} className="w-1/6 max-w-full max-h-full rounded-2xl" />
                  <span className="w-1/2 h-full text-2xl ms-2">
                     {name}
                     <br />
                     <span className="text-base ms-2">{description}</span>
                  </span>
               </div>
               <div>
                  <CircleButton
                     OnElement={filledCartIcon}
                     OffElement={cartIcon}
                     type="cart"
                     className="m-1"
                  />
                  <CircleButton
                     OnElement={filledStarIcon}
                     OffElement={starIcon}
                     type="star"
                     className="m-1"
                  />
                  <CircleButton
                     OnElement={filledDotsIcon}
                     OffElement={dotsIcon}
                     type="more"
                     className="m-1"
                  />
               </div>
            </Link>
         </li>
      </motion.div>
   );
}

export default ListItem;