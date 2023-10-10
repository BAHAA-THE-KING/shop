import React from 'react'
import Category from './Category'
import coffeeImage from "@/public/coffee.webp";
import chickenImage from "@/public/chicken.jpg";
import cubeImage from "@/public/cube.png";

const products = [
   {
      name: "drinks",
      products: [
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
      ]
   },
   {
      name: "food",
      products: [
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
         }
      ]
   },
   {
      name: "toys",
      products: [
         {
            id: 1,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain."
         },
         {
            id: 3,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain."
         },
         {
            id: 5,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain."
         },
         {
            id: 7,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain."
         },
         {
            id: 9,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain."
         },
      ]
   },
];

const Products = () => {
   return (
      <div className='w-full flex flex-col justify-center items-stretch'>
         {
            products.map(
               e =>
                  <Category key={e.name} name={e.name} products={e.products} />
            )
         }
      </div>
   );
}

export default Products;