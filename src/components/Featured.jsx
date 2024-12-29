import { motion,  useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";
function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover =(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd =(index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    <>
      <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
          <h1 className='text-7xl font-Neue-Montreal tracking-tight'>
            Featured projects
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full flex gap-10 mt-10 ">
            <motion.div
             onHoverStart={()=>handleHover(0)}
             onHoverEnd={()=>handleHoverEnd(0)}
              className="cardContainer relative w-1/2 h-[75vh] ">
              <h1 className="text-[#cdea68] flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 absolute left-full leading-none tracking-tight z-[9] text-9xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1]}} className="inline-block" key={index}>
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full  h-full overflow-hidden rounded-xl ">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer relative w-1/2 h-[75vh] ">
              <div className="card w-full h-full  overflow-hidden rounded-xl">
                <h1 className="text-[#cdea68] flex overflow-hidden translate-x-1/2 -translate-y-1/2  top-1/2 absolute right-full leading-none tracking-tight z-[9] text-9xl">
                  {"VISE".split("").map((item, index) => (
                  <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1]}} className="inline-block" key={index}>
                  {item}
                </motion.span>
                  ))}
                </h1>
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
