"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import EcosystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = ({ feature }: any) => {
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

function Feature() {
  return (
    <div className='bg-black text-white py-12 sm:py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Everything you need</h1>
        <p className='text-center text-gray-300 max-w-2xl mx-auto mb-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam in corrupti expedita eligendi quo id mollitia et maiores, suscipit quis aliquam autem. Repellendus quidem perspiciatis vitae! Rerum, deserunt unde?
        </p>
        
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <Features feature={feature} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
