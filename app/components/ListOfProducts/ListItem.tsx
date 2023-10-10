"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CircleButton } from "..";

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
   return (
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
               <CircleButton title="" onClick={() => { }} className="m-1" />
               <CircleButton title="" onClick={() => { }} className="m-1" />
               <CircleButton title="" onClick={() => { }} className="m-1" />
            </div>
         </Link>
      </li>
   );
}

export default ListItem;