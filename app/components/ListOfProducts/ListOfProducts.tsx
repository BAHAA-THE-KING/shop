import ListItem from "./ListItem";
import coffeeImage from "@/public/coffee.webp";
import chickenImage from "@/public/chicken.jpg";
import cubeImage from "@/public/cube.png";
import Navigation from "./Navigation";

const products = [
   {
      id: 1,
      name: "coffee",
      imageURL: coffeeImage,
      description: "Well made coffee, from good beans."
   },
   {
      id: 3,
      name: "coffee",
      imageURL: coffeeImage,
      description: "Well made coffee, from good beans."
   },
   {
      id: 5,
      name: "coffee",
      imageURL: coffeeImage,
      description: "Well made coffee, from good beans."
   },
   {
      id: 7,
      name: "coffee",
      imageURL: coffeeImage,
      description: "Well made coffee, from good beans."
   },
   {
      id: 9,
      name: "coffee",
      imageURL: coffeeImage,
      description: "Well made coffee, from good beans."
   },
   {
      id: 2,
      name: "Fried chicken",
      imageURL: chickenImage,
      description: "Good chicken with clean cook results a good taste."
   },
   {
      id: 4,
      name: "Fried chicken",
      imageURL: chickenImage,
      description: "Good chicken with clean cook results a good taste."
   },
   {
      id: 6,
      name: "Fried chicken",
      imageURL: chickenImage,
      description: "Good chicken with clean cook results a good taste."
   },
   {
      id: 8,
      name: "Fried chicken",
      imageURL: chickenImage,
      description: "Good chicken with clean cook results a good taste."
   },
   {
      id: 10,
      name: "Fried chicken",
      imageURL: chickenImage,
      description: "Good chicken with clean cook results a good taste."
   },
   {
      id: 11,
      name: "Rubik Cube",
      imageURL: cubeImage,
      description: "Good for brain."
   },
   {
      id: 12,
      name: "Rubik Cube",
      imageURL: cubeImage,
      description: "Good for brain."
   },
   {
      id: 13,
      name: "Rubik Cube",
      imageURL: cubeImage,
      description: "Good for brain."
   },
   {
      id: 14,
      name: "Rubik Cube",
      imageURL: cubeImage,
      description: "Good for brain."
   },
   {
      id: 15,
      name: "Rubik Cube",
      imageURL: cubeImage,
      description: "Good for brain."
   }
];

function ListOfProducts() {
   return (
      <>
         <ul className="flex flex-col flex-nowrap justify-start items-stretch list-none mt-2">
            {
               products.map(
                  e =>
                     <ListItem key={e.id} product={e} />
               )
            }
         </ul>
         <Navigation />
      </>
   );
}

export default ListOfProducts;