import React from 'react'
import { Category } from '.'

const products = [
   {
      name: "drinks",
      products: [
         {
            id: 1,
            name: "coffee",
            imageURL: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp",
            description: "Well made coffe, from good beans."
         },
         {
            id: 3,
            name: "coffee",
            imageURL: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp",
            description: "Well made coffe, from good beans."
         },
         {
            id: 5,
            name: "coffee",
            imageURL: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp",
            description: "Well made coffe, from good beans."
         },
         {
            id: 7,
            name: "coffee",
            imageURL: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp",
            description: "Well made coffe, from good beans."
         },
         {
            id: 9,
            name: "coffee",
            imageURL: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp",
            description: "Well made coffe, from good beans."
         },
      ]
   },
   {
      name: "meat",
      products: [
         {
            id: 2,
            name: "كوكو مشوي",
            imageURL: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
            description: "كوكو مشوي منيح و طيب كتير."
         },
         {
            id: 4,
            name: "كوكو مشوي",
            imageURL: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
            description: "كوكو مشوي منيح و طيب كتير."
         },
         {
            id: 6,
            name: "كوكو مشوي",
            imageURL: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
            description: "كوكو مشوي منيح و طيب كتير."
         },
         {
            id: 8,
            name: "كوكو مشوي",
            imageURL: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
            description: "كوكو مشوي منيح و طيب كتير."
         },
         {
            id: 10,
            name: "كوكو مشوي",
            imageURL: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
            description: "كوكو مشوي منيح و طيب كتير."
         }
      ]
   }
];

const Products = () => {
   return (
      <div className='w-full flex flex-col justify-center items-stretch'>
         {
            products.map(
               e =>
                  <Category key={e.name} name={e.name} products={e.products} image={e.products[0].imageURL} />
            )
         }
      </div>
   );
}

export default Products;