import React from 'react'

function About() {
  return (
    <>
    <div className='w-full font-Neue-Montreal p-20 rounded-tr-3xl rounded-tl-3xl bg-[#cdea68] text-black'>
        <h1 className='font-Neue-Montreal text-[4vw] leading-[3.5vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full mt-20 flex gap-5 border-t-[1px] pt-10 border-[#95a658]'>
            <div className='w-1/2'>
                <h1 className='text-7xl '>Our approach :</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#95a658]'></div>
        </div>
    </div>
    </>
  )
}

export default About
