"use client";

import { useRouter } from "next/navigation";
import { Button } from "..";
import Image from "next/image";

const Card = (
   { product }: {
      product: {
         id: number,
         name: string,
         imageURL: any,
         description: string
      }
   }) => {
   const router = useRouter();

   return (
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
   )
}

export default Card