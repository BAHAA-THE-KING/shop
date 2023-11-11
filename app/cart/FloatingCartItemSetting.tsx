import Image from "next/image";
import CartItem from "../types/CartItem";
import { Button } from "../components";

function FloatingCartItemSetting(
   { product, setProduct }: {
      product: CartItem,
      setProduct: Function
   }
) {
   return (
      <div className="
                        h-screen
                        sticky
                        top-0
                        m-2

                        flex
                        flex-col
                        justify-center
                        items-stretch
                        ">
         <div className="
                          w-full
                          h-3/4
                          p-5
                          bg-purple-50
                          
                          border
                          border-purple-600
                          rounded-2xl
                          ">
            {
               product &&
               <>
                  <Image src={product.imageURL} alt={product.name} />
                  <span className="text-2xl">{product.name}</span>
                  <br />
                  <span>Price Per Unit :{product.price}$</span>
                  <br />
                  <span>Quantity: </span>
                  <button className="btn btn-circle" onClick={() => setProduct({ ...product, count: Math.max(1, product.count - 1) })}>-</button>
                  <span className="mx-5">{product.count}</span>
                  <button className="btn btn-circle" onClick={() => setProduct({ ...product, count: Math.max(1, product.count + 1) })}>+</button>
                  <br />
                  <span>Total Price :{product.price * product.count}$</span>
               </>
            }
            <br />
            <br />
         </div>
         <Button title={"Order Now"} className="w-auto mt-2" onClick={() => { }} />
      </div>
   );
}

export default FloatingCartItemSetting;