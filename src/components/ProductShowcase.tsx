"use client"
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {

  const appImage = useRef<HTMLImageElement>(null);
  const {scrollYProgress} = useScroll({
    target : appImage,
    offset: [
      'start end',
       'end end'
    ]
  })
  useEffect(()=>{
    scrollYProgress.on("change", (latestValue)=>{
      console.log("latest", latestValue)
    })
  })
  
  const rotateX = useTransform((scrollYProgress), [0, 1], [15, 0])

  const opacity = useTransform((scrollYProgress), [0, 1], [0.5, 1])

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-12 sm:py-16">
      <div className="container">
<h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive</h2>
<div className="max-w-xl mx-auto">

<p className="text-xl text-center text-white/70 mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab laudantium quibusdam excepturi voluptatibus mollitia perspiciatis, eum cupiditate qui aspernatur recusandae sint cum ipsam quisquam numquam veniam aperiam ipsum obcaecati?</p>
</div>



<motion.div
style={{
  opacity : opacity,
  rotateX: rotateX,
  transformPerspective : "800px"
}}
>
<div className="flex justify-center mt-10 sm:mt-14">
          <Image
            className="w-full "
            src={appScreen}
            alt="The Product screenshot"
            priority
            ref = {appImage}
          />
        </div>
        </motion.div>
      </div>
     
    </div>
  );
};
