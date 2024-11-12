"use client"
import React from 'react';
import Image from 'next/image';
import acmeLogo from '../assets/images/acme.png';
import auantumLogo from '../assets/images/quantum.png';
import echoLogo from '../assets/images/echo.png';
import celestialLogo from '../assets/images/celestial.png';
import pulseLogo from '../assets/images/pulse.png';
import apexLogo from '../assets/images/apex.png';
import { motion } from 'framer-motion';

const images = [
    { src: acmeLogo, alt: 'Acme Company Logo' },
    { src: auantumLogo, alt: 'Auantum Company Logo' },
    { src: echoLogo, alt: 'Echo Company Logo' },
    { src: celestialLogo, alt: 'Celestial Company Logo' },
    { src: pulseLogo, alt: 'Pulse Company Logo' },
    { src: apexLogo, alt: 'Apex Company Logo' },
];

function LogoTicker() {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto relative">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the worlds most innovative teams
        </h2>
        
        <div className="overflow-hidden mt-9 relative flex items-center">
          {/* Gradient blur effect on each side */}
          <div className="absolute left-0 h-full w-20 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 h-full w-20 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-16 flex-none pr-16"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear'
            }}
          >
            {images.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
            {/* Duplicate images for seamless infinite scroll effect */}
            {images.map(({ src, alt }, index) => (
              <Image key={`duplicate-${index}`} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
