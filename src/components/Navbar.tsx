"use client"
import { useState } from "react"
import Image from "next/image"
import logoImage from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"
import Link from "next/link"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className=" mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative">
  {/* Blurred Gradient Background */}
  <div
    className="absolute inset-0 blur-md"
    style={{
      background: "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
      zIndex: 10,
    }}
  ></div>
  
  {/* Image on Top */}
  <Image src={logoImage} alt="logo" className="h-12 w-12 relative z-20" />
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 flex-row items-center">
          <a href="https://www.faisaldev.tech/" className="text-white opacity-60 hover:opacity-100 transition">Home</a>
          <a href="https://www.faisaldev.tech/" className="text-white opacity-60 hover:opacity-100 transition">Services</a>
          <a href="https://www.faisaldev.tech/about" className="text-white opacity-60 hover:opacity-100 transition">About</a>
          <a href="https://www.faisaldev.tech/contact" className="text-white opacity-60 hover:opacity-100 transition">Contact</a>
          <Link href="#" className="bg-white px-4 py-2 rounded-md">Get a Project</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <MenuIcon className="text-white h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div
    className={`md:hidden absolute z-40 mx-auto w-full bg-black transition-all duration-300 ease-in-out transform ${
      menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    } text-white space-y-4 flex justify-center items-center flex-col p-4`}
  >
    <a href="#" className="block opacity-60 hover:opacity-100 transition">Home</a>
    <a href="https://www.faisaldev.tech/" className="block opacity-60 hover:opacity-100 transition">Services</a>
    <a href="https://www.faisaldev.tech/about" className="block opacity-60 hover:opacity-100 transition">About</a>
    <a href="https://www.faisaldev.tech/contact" className="block opacity-60 hover:opacity-100 transition">Contact</a>
    <div className="py-2">
      <Link href="https://github.com/M-Faisal-Dev" className="bg-white text-black px-4 py-2 rounded-md">Get a Project</Link>
    </div>
  </div>
)}

    </div>
  )
}

export default Navbar;
