import React from 'react'
import EcosystemIcon from "../assets/icons/ecosystem.svg"

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
            <div key={index} className='border border-white/30 px-5 py-10 text-center rounded-xl shadow-lg'>
            <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
            <EcosystemIcon/>
            </div>
              <h2 className='text-xl mt-6 bold mb-2'>{feature.title}</h2>
              <p className='text-white/70'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
