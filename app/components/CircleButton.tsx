"use client";

import { MouseEventHandler, ReactNode } from "react";

function CircleButton(
   { title, onClick, className }: {
      title: string | ReactNode,
      onClick: MouseEventHandler<HTMLDivElement>,
      className: string
   }
) {
   return (
      <div
         className={"btn btn-circle " + className}
         onClick={onClick}>
         {title}
      </div>
   );
}

export default CircleButton;