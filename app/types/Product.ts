import { StaticImageData } from "next/image";

export default interface Product {
   id: number;
   name: string;
   imageURL: string | StaticImageData;
   description: string;
   price: number;
   inCart: boolean;
   isFav: boolean;
};