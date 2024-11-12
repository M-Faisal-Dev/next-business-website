"use client"
import Link from 'next/link'
import React from 'react'
import ArrowIcon from "../assets/icons/arrow-w.svg"
import messageImage from "../assets/images/message.png"
import curserImage from "../assets/images/cursor.png"
import {motion} from "framer-motion"


import Image from "next/image"
function MainBanner() {
  return (
    <div className='bg-black text-white relative overflow-clip overflow-x-hidden py-[72px] sm:py-24'
    style={{
      background: 'linear-gradient(to bottom, #000, #200D42 34%, #4F21A1 65%, #A36EDB 82%)',
    }}
    >

<div
  className="absolute h-[460px] w-[760px] sm:w-[1536px] sm:h-[768px] rounded-[100%] lg:h-[1200px] lg:w-[2400px] left-1/2 -translate-x-1/2 border bg-black border-[#B48CDE] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
  style={{
    background: "radial-gradient(closest-side, #000 82%, #9560EB)"
  }}
>
</div>


    
<div
  className='container relative'
  
>

  <div className='flex flex-row items-center justify-center'>
  <Link href="#hello" className='inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30'>
     <span className='text-transparent bg-clip-text [-webkit-background-clip:text] bg-([linear-gradientto_right, #F87AFF, #FB93D0, #FFDD99, #C33F0B2, #2FD8FE)]'
       style={{
        background: 'linear-gradient(to right, #F87AFF, #FB93D0, #FFDD99, #C3F0B2, #2FD8FE)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}
     >
      Version 2 is here
     </span>
     <span className='inline-flex items-center gap-1'>
     <span>
      Read More
     </span>

     <ArrowIcon/>
     </span>
     </Link>
  </div>
     <div className='flex justify-center mt-8'>
<div className='inline-flex relative'>
   
     <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex max-w-[40rem]'>
      One task 
      <br />
      at the time 
     </h1>
     <motion.div className='absolute right-[576px] top-[108px] hidden sm:inline'
     drag
     dragSnapToOrigin
     >
     <Image src={curserImage} height="200" width = "200" className='max-w-none' draggable="false" alt = "Curser Image"/>

     </motion.div>

     <motion.div className='absolute top-[56px] left-[578px]
     hidden sm:inline'
     drag
     dragSnapToOrigin>
     <Image src={messageImage} height="200" width = "200" className='max-w-none' draggable="false" alt = "Message Image"/>
</motion.div>
     </div>
     </div>
<div className='flex justify-center'>


     <p className='text-center text-xl mt-8 max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur illum ipsa cumque, necessitatibus quibusdam voluptas est mollitia laudantium doloremque nam, culpa iusto. Ab, beatae? Deserunt ex dolores ab dolorum similique!</p>

     </div>
     <div className='flex justify-center mt-8'>
      <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
     </div>
  
    </div>
 
    
    </div>
  )
}

export default MainBanner
