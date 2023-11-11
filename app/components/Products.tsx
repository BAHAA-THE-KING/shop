import React from 'react'
import coffeeImage from "@/public/coffee.webp";
import chickenImage from "@/public/chicken.jpg";
import cubeImage from "@/public/cube.png";
import { Category } from '.';

const products = [
   {
      name: "drinks",
      products: [
         {
            id: 1,
            name: "coffee",
            imageURL: coffeeImage,
            description: "Well made coffee, from good beans.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 3,
            name: "coffee",
            imageURL: coffeeImage,
            description: "Well made coffee, from good beans.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 5,
            name: "coffee",
            imageURL: coffeeImage,
            description: "Well made coffee, from good beans.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 7,
            name: "coffee",
            imageURL: coffeeImage,
            description: "Well made coffee, from good beans.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 9,
            name: "coffee",
            imageURL: coffeeImage,
            description: "Well made coffee, from good beans.",
            price: 100,
            inCart: false,
            isFav: true
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
            description: "Good chicken with clean cook results a good taste.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 4,
            name: "Fried chicken",
            imageURL: chickenImage,
            description: "Good chicken with clean cook results a good taste.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 6,
            name: "Fried chicken",
            imageURL: chickenImage,
            description: "Good chicken with clean cook results a good taste.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 8,
            name: "Fried chicken",
            imageURL: chickenImage,
            description: "Good chicken with clean cook results a good taste.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 10,
            name: "Fried chicken",
            imageURL: chickenImage,
            description: "Good chicken with clean cook results a good taste.",
            price: 100,
            inCart: false,
            isFav: true
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
            description: "Good for brain.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 3,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 5,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 7,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain.",
            price: 100,
            inCart: false,
            isFav: true
         },
         {
            id: 9,
            name: "Rubik Cube",
            imageURL: cubeImage,
            description: "Good for brain.",
            price: 100,
            inCart: false,
            isFav: true
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