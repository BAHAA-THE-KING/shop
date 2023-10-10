"use client";

import { useRouter } from "next/navigation";
import { Button } from "..";

const SeeMoreCard = (
   { name }: {
      name: string
   }
) => {
   const router = useRouter();

   return (
      <Button title={"See More " + name + " ❯"} className="w-max mr-24" onClick={() => { router.push(""); }} />
   );
}

export default SeeMoreCard;