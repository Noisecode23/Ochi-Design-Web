import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
function LandingPage() {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
          {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
            return(
            <div className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                <motion.div
                initial={{width:0}}
                animate={{width:"9vw"}}
                transition={{ease:[0.83, 0, 0.17, 1], duration: 1}}
                 className=' mr-5 w-[8vw] rounded-md h-[5.6vw] relative -top-[1vw] bg-red-500'></motion.div>)}
            <h1 key={index} className='uppercase leading-[7vw] relative -top-[1vw] tracking-tighter text-[7.5vw] font-["Tex_Gyre_Adventor"] font-semibold'>{item}</h1>
              </div>
        </div>
          )})}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center font-["Neue_Montreal"] py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>(
            <p key={index} className='font-light text-md tracking-tight leading-none '>{item}</p>
          ))}
          <div className='start flex items-center gap-2'>
            <div className='py-3 px-3 border-[1px] rounded-full border-zinc-400 text-sm font-light uppercase'>Start your project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-400'>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage
