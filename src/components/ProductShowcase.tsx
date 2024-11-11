import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-12 sm:py-16">
      <div className="container">
<h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive</h2>
<div className="max-w-xl mx-auto">

<p className="text-xl text-center text-white/70 mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab laudantium quibusdam excepturi voluptatibus mollitia perspiciatis, eum cupiditate qui aspernatur recusandae sint cum ipsam quisquam numquam veniam aperiam ipsum obcaecati?</p>
</div>
      </div>
      <Image className="mt-14" src = {appScreen} alt = "The Product screenshot"/>
    </div>
  );
};
