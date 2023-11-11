import Product from "./Product";

export default interface CartItem extends Product {
   inCart: true;
   count: number;
   addDate: Date;
};