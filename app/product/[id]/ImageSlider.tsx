"use client";

import Image from "next/image";
import coffeeImage from "@/public/coffee.webp";
import chickenImage from "@/public/chicken.jpg";
import cubeImage from "@/public/cube.png";

const images = [coffeeImage, chickenImage, cubeImage];

function ImageSlider() {
   return (
      <div className="w-1/2 h-full p-4 bg-slate-200 border border-gray-700 rounded-3xl">
         <div id="images" className="w-full h-full overflow-x-hidden">
            <div className="h-full flex" style={{ width: images.length + "00%" }}>
               {
                  images.map(
                     e => <Image key={e.toString()} src={e} alt="" className='w-full h-full' />
                  )
               }
            </div>
         </div>
         <div className="relative flex justify-between -translate-y-1/2 -top-1/2">
            <div
               className="btn btn-circle"
               onClick={() => document.querySelector("#images")!.scrollBy({ left: -window.getComputedStyle(document.querySelector("#images")!).getPropertyValue("width").split("px")[0], behavior: "smooth" })}>
               ❮
            </div>
            <div
               className="btn btn-circle"
               onClick={() => document.querySelector("#images")!.scrollBy({ left: +window.getComputedStyle(document.querySelector("#images")!).getPropertyValue("width").split("px")[0], behavior: "smooth" })}>
               ❯
            </div>
         </div>
      </div>
   );
}

export default ImageSlider;