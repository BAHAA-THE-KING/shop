"use client";

import Image from "next/image";
import Link from "next/link";
import { CartCircleButton, FavCircleButton, MoreCircleButton, SlideLTR } from "..";
import Product from "@/app/types/Product";

function ListItem(
   { product }: {
      product: Product
   }
) {
   return (
      <SlideLTR>
         <li>
            <Link
               href={"/product/" + product.id}
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
                     ">
               <div className="w-2/3 h-full flex flex-row justify-start items-stretch">
                  <Image src={product.imageURL} alt={product.name} className="w-1/6 max-w-full max-h-full rounded-2xl" />
                  <span className="w-1/2 h-full text-2xl ms-2">
                     {product.name}
                     <br />
                     <span className="text-base ms-2">{product.description}</span>
                  </span>
               </div>
               <div>
                  <CartCircleButton
                     inCart={product.inCart}
                     onClick={(e: any) => { e.stopPropagation(); }}
                     className="m-1"
                  />
                  <FavCircleButton
                     isFav={product.isFav}
                     onClick={(e: any) => { e.stopPropagation(); }}
                     className="m-1"
                  />
                  <MoreCircleButton
                     className="m-1"
                  />
               </div>
            </Link>
         </li>
      </SlideLTR>
   );
}

export default ListItem;