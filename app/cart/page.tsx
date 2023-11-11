"use client";

import { ListOfCartItems, ListOfProducts } from "../components";
import coffeeImage from "@/public/coffee.webp";
import { useState } from "react";
import CartItem from "@/app/types/CartItem";
import FloatingCartItemSetting from "./FloatingCartItemSetting";

const products = [
  {
    id: 1,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 3,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 5,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 7,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 9,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  }, {
    id: 10,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 30,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 50,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 70,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 90,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  }, {
    id: 100,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 300,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 500,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 700,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
  {
    id: 900,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    price: 100,
    isFav: true,
    inCart: true,
    count: 10
  },
];

function Cart() {
  const [product, setProduct]: [CartItem | any, Function] = useState(null);
  return (
    <div className="w-full flex flex-row justify-start items-stretch">
      <div className="overflow-x-visible" style={{ flex: "2" }}>
        <ListOfCartItems products={products} withNav={false} onClick={(prod: any) => setProduct(prod)} />
      </div>
      <div className="flex-1">
        <FloatingCartItemSetting product={product} setProduct={setProduct} />
      </div>
    </div>
  );
}
export default Cart;