import { ReactNode } from "react";

function CircleButton(
   { OnElement, OffElement, type, className }: {
      OnElement: ReactNode,
      OffElement: ReactNode,
      type: "cart" | "star" | "more",
      className: string
   }
) {
   return (
      <label
         className={"btn btn-circle swap " + className}
         onClick={
            e => {
               e.stopPropagation();
               if (type === "cart") { }
               if (type === "star") { }
               if (type === "more") { }
            }
         }>
         <input type="checkbox" />
         {OnElement}
         {OffElement}
      </label>
   );
}

export default CircleButton;