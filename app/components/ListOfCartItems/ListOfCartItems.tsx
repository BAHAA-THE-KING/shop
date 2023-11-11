import { useState } from "react";
import ListItem from "./ListCartItem";
import Navigation from "./Navigation";
import Product from "@/app/types/Product";

function ListOfCartItems(
   props: {
      products: Product[],
      onClick?: Function,
      withNav: boolean
   }
) {
   const [products, setProducts] = useState(props.products);
   return (
      <>
         <ul className="flex flex-col flex-nowrap justify-start items-stretch list-none mt-2">
            {
               products.map(
                  e =>
                     <ListItem
                        key={e.id}
                        product={e}
                        onClick={(e: any) => props.onClick && props.onClick(e)}
                        setProducts={setProducts}
                     />
               )
            }
         </ul>
         {props.withNav && <Navigation />}
      </>
   );
}

export default ListOfCartItems;