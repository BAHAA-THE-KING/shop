"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"
import { useState } from "react";
import { Button } from "..";
import Product from "@/app/types/Product";

const Card = (
   { product }: {
      product: Product
   }) => {
   const router = useRouter();
   const [finished, setFinished] = useState(false);

   return (
      <motion.div
         variants={
            {
               offscreen: {
                  y: -250,
                  opacity: 0.5
               },
               onscreen: {
                  y: 0,
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
         whileInView="onscreen"
         onAnimationComplete={() => setFinished(true)}
      >
         <div className="card bg-base-100 shadow-xl p-2 m-1 h-96 border border-purple-600">
            <figure className='max-h-56'><Image src={product.imageURL} alt={product.name} /></figure>
            <div className="card-body">
               <h2 className="card-title">{product.name}</h2>
               <p>{product.description.slice(0, 50)}</p>
               <div className="card-actions justify-end">
                  <Button
                     title="More Details"
                     onClick={
                        () => { router.push("/product/" + product.id); }
                     }
                  />
               </div>
            </div>
         </div>
      </motion.div>
   );
}

export default Card