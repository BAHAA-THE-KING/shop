"use client";

import { CircleButton, Comments } from "@/app/components";
import ImageSlider from "./ImageSlider";
import Rating from "./Rating";

const cartIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>;
const filledCartIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>;
const starIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>;
const filledStarIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>;
const dotsIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-off">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>;
const filledDotsIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 swap-on">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>;

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-stretch m-1">
      <div className="h-96 flex">
        <ImageSlider />
        <div className="w-1/2 h-full m-3">
          <div className="text-3xl">Coffee</div>
          <div><i className="text-gray-400">by</i> de caffe</div>
          <Rating />
          <div>
            <CircleButton
              OnElement={filledCartIcon}
              OffElement={cartIcon}
              type="cart"
              className="m-1"
            />
            <CircleButton
              OnElement={filledStarIcon}
              OffElement={starIcon}
              type="star"
              className="m-1"
            />
            <CircleButton
              OnElement={filledDotsIcon}
              OffElement={dotsIcon}
              type="more"
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
    </div>
  );
}