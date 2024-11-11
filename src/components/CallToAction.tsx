import React from 'react';
import hilix2 from "../assets/images/helix2.png"
import emojiStar from "../assets/images/emojistar.png"

import Image from "next/image"

function CallToAction() {
  return (
    <div className="bg-black text-white sm:py-24 py-[72px] text-center">
      <div className="container relative mx-auto max-w-xl px-6">
<Image src={hilix2} className='absolute top-6 left-[calc(100%+36px)]' alt=''/>
<Image src={emojiStar} className='absolute -top-[120px] right-[calc(100%+24px)]' alt=''/>

        <h2 className="font-bold text-4xl sm:text-5xl tracking-tighter">Get instant access</h2>
        <p className="text-lg sm:text-xl text-white/70 mt-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id blanditiis quam consectetur
          sapiente quo possimus magni ea atque similique rerum vero eius, reiciendis exercitationem
          illo, officiis ab perspiciatis voluptates veritatis.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 h-12 bg-white/20 rounded-lg px-4 text-white placeholder-[#9CA3AF] focus:outline-none"
          />
          <button className="w-full sm:w-auto bg-white text-black rounded-lg h-12 px-6 font-semibold transition-colors duration-300 hover:bg-gray-200">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallToAction;