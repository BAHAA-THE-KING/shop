import Card from "./Card";
import SeeMoreCard from "./SeeMoreCard";

const Category = (
   { name, products }: {
      name: string,
      products: {
         id: number,
         name: string,
         imageURL: any,
         description: string
      }[]
   }
) => {
   return (
      <div className="m-3 me-0 relative">
         <span className="text-5xl">
            {name}
         </span>
         <hr className="w-full border-black" />
         <br />
         <div
            id={name}
            className="pb-10 grid grid-rows-1 items-center gap-3 overflow-auto"
            style={{
               gridTemplateColumns: "repeat(5,24rem) auto", scrollbarWidth: "none"
            }}>
            {
               products.map(
                  e => <Card key={e.id} product={e} />
               )
            }
            <SeeMoreCard name={name} />
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div
               className="btn btn-circle"
               onClick={() => document.querySelector("#" + name)!.scrollBy({ left: -400, behavior: "smooth" })}>
               ❮
            </div>
            <div
               className="btn btn-circle"
               onClick={() => document.querySelector("#" + name)!.scrollBy({ left: 400, behavior: "smooth" })}>
               ❯
            </div>
         </div>
      </div>
   );
}

export default Category;