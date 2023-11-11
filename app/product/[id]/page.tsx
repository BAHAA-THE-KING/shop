"use client";

import { Comments, Rating, Category, CartCircleButton, FavCircleButton, MoreCircleButton } from "@/app/components";
import ImageSlider from "./ImageSlider";
import coffeeImage from "@/public/coffee.webp";

const products = [
  {
    id: 1,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 3,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 5,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 7,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 9,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  }, {
    id: 10,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 30,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 50,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 70,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 90,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  }, {
    id: 100,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 300,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 500,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 700,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
  {
    id: 900,
    name: "coffee",
    imageURL: coffeeImage,
    description: "Well made coffee, from good beans.",
    isFav: false,
    inCart: true,
    price: 100
  },
];

function Product() {
  return (
    <div className="flex flex-col justify-start items-stretch m-1">
      <div className="h-96 flex">
        <ImageSlider />
        <div className="w-1/2 h-full m-3">
          <div className="text-3xl">Coffee</div>
          <div><i className="text-gray-400">by</i> de caffe</div>
          <Rating />
          <div>
            <CartCircleButton
              inCart={true}
              onClick={() => { }}
              className="m-1"
            />
            <FavCircleButton
              isFav={false}
              onClick={() => { }}
              className="m-1"
            />
            <MoreCircleButton
              className="m-1"
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tempore porro dolores. Asperiores illum reiciendis atque, ipsam minus ratione aperiam tenetur quia enim quibusdam repellat unde dolores. Necessitatibus, suscipit consectetur!
      </div>
      <Comments />
      <Category name="Similar Products" products={products} />
    </div>
  );
}

export default Product;