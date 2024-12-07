import React from 'react'

function Cards() {
  return (
    <>
    <div className='w-full h-screen flex items-center  gap-10 bg-zinc-900 px-32'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative w-full h-full rounded-xl flex items-center justify-center  bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>&copy; 2019-2022</button>
            </div>
            <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>&copy; 2019-2022</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards
