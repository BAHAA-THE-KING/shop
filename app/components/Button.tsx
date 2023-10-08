import { MouseEventHandler } from "react";
import normal from "./styles/normal";

const Button = (
   { title, className, onClick }: {
      title: string,
      className?: string,
      onClick: MouseEventHandler<HTMLButtonElement>
   }
) => {
   return (
      <button
         className={`btn bg-purple-100 ${normal} ${className ?? ""}`}
         onClick={onClick}
      >
         {title}
      </button>
   )
};

export default Button;