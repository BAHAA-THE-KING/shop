import Image from "next/image";
import { SlideLTR } from "..";
import Stars from "../Stars";
import Comment from "@/app/types/Comment";

function Comment(
   { id, userId, userName, userImageURL, userRating, text, date }: Comment
) {
   return (
      <SlideLTR>
         <div className="
                        h-28
                        mx-3
                        my-1
                        
                        border
                        border-slate-600
                        rounded-md
                        
                        flex
                        flex-row
                        justify-start
                        items-stretch
                        ">
            <div className="flex flex-col justify-start w-20 p-1">
               <div className="aspect-square">
                  <Image src={userImageURL} alt="" className="w-full h-full" />
               </div>
               <span className="text-center h-8">{userName}</span>
            </div>
            <div className="ms-3 flex flex-col justify-start items-start p-1">
               <span>{text}</span>
               <span className="text-xs text-gray-400">{date}</span>
               <Stars rating={userRating} setRating={null} />
            </div>
         </div>
      </SlideLTR>
   );
}

export default Comment;