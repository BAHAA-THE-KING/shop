"use client";

import { ListOfProducts } from "../components";
import Search from "./Search";
import coffeeImage from "@/public/coffee.webp";

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

export default function Products(
  { search, orderBy, orderType }: {
    search?: string,
    orderBy?: string,
    orderType?: string
  }
) {
  return (
    <div className="h-full flex flex-col justify-end items-stretch mt-2">
      <Search className="mr-2 flex justify-end" />
      <ListOfProducts products={products} withNav={true} />
    </div>
  );
}