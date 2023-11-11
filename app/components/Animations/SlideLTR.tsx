import { motion } from "framer-motion";
import { Component, ReactNode, useState } from "react";

function SlideLTR(
   { children }: {
      children: any
   }
) {
   const [finished, setFinished] = useState(false);
   return (
      <motion.div
         variants={
            {
               offscreen: {
                  x: -500,
                  opacity: 0.5
               },
               onscreen: {
                  x: 0,
                  opacity: 1,
                  transition: {
                     type: "spring",
                     bounce: 0.4,
                     duration: 0.8
                  }
               },
            }
         }
         initial={finished ? "onscreen" : "offscreen"}
         whileInView={"onscreen"}
         onAnimationComplete={() => setFinished(true)}
      >
         {children}
      </motion.div>
   );
}

export default SlideLTR;