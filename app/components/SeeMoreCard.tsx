"use client";

import { useRouter } from "next/navigation";
import { Button } from ".";

const SeeMoreCard = (
   { name, image }: {
      name: string,
      image: string
   }
) => {
   const router = useRouter();

   return (
      <Button title={"See More " + name + " ❯"} className="w-max" onClick={() => { router.push(""); }} />
   );
}

export default SeeMoreCard;