import React from 'react'
import Image from "next/image"
import acmeLogo from "../assets/images/acme.png"
import auantumLogo from "../assets/images/quantum.png"
import echoLogo from "../assets/images/echo.png"
import celestialLogo from "../assets/images/celestial.png"
import pulseLogo from "../assets/images/pulse.png"
import apexLogo from "../assets/images/apex.png"

const images = [
    { src: acmeLogo, alt: "Acme Company Logo" },
    { src: auantumLogo, alt: "Auantum Company Logo" },
    { src: echoLogo, alt: "Echo Company Logo" },
    { src: celestialLogo, alt: "Celestial Company Logo" },
    { src: pulseLogo, alt: "Pulse Company Logo" },
    { src: apexLogo, alt: "Apex Company Logo" }
];

function LogoTicker() {
  return (
    <div className='bg-black  text-white py-[72px] sm:py-24'>
      <div className='container mx-auto relative'>
        <h2 className='text-xl text-center text-white/70'>Trusted by the world's most innovative teams</h2>
        
        <div className="overflow-hidden mt-9 relative">
          {/* Pseudo elements for gradient fade on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black"></div>
          
          <div className='flex gap-16'>
            {images.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} className='flex-none h-8 w-auto' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
