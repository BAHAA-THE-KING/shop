import { useState } from "react";
import ListItem from "./ListItem";
import Navigation from "./Navigation";
import Product from "@/app/types/Product";

function ListOfProducts(
   { products, withNav }: {
      products: Product[],
      withNav: boolean
   }
) {
   return (
      <>
         <ul className="flex flex-col flex-nowrap justify-start items-stretch list-none mt-2">
            {
               products.map(
                  e =>
                     <ListItem
                        key={e.id}
                        product={e}
                     />
               )
            }
         </ul>
         {withNav && <Navigation />}
      </>
   );
}

export default ListOfProducts;