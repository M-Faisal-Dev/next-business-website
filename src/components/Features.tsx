
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import EcosystemIcon from "../assets/icons/ecosystem.svg";
interface FeatureProps {
    feature: {
      title: string;
      description: string;
    };
  }
 export const Features = ({ feature }: FeatureProps) => {
    const [gradientOrigin, setGradientOrigin] = useState({ x: 100, y: 0 });
  
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X position relative to the card
      const y = e.clientY - rect.top;  // Mouse Y position relative to the card
  
      setGradientOrigin({ x, y });
    };
  
    return (
      <motion.div
        className="relative border border-white/30 z-10 text-center rounded-xl shadow-lg"
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.05 }} // Slight hover effect to make the card grow
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Outer border container with dynamic gradient */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-xl z-0 border-2 border-purple-400"
          style={{
            WebkitMaskImage: `radial-gradient(100px 100px at ${gradientOrigin.x}px ${gradientOrigin.y}px, black, transparent)`,
            maskImage: `radial-gradient(100px 100px at ${gradientOrigin.x}px ${gradientOrigin.y}px, black, transparent)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Content */}
        <div className="relative z-10 p-6">
          <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
            <EcosystemIcon />
          </div>
          <h2 className='text-xl mt-6 font-bold mb-2'>{feature.title}</h2>
          <p className='text-white/70'>{feature.description}</p>
        </div>
      </motion.div>
    );
  };