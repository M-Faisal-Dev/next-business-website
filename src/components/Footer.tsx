"use client"
import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/60 py-6 border-t border-white/20">
      <div className="container mx-auto flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between px-4">
        <div className="text-sm text-center sm:text-left">
          © {currentYear} Your Company Name. All rights reserved.
        </div>
        <ul className="flex space-x-4">
        
          <li>
            <a href="https://instagram.com" aria-label="Instagram">
              <InstaIcon className="w-6 h-6 fill-current text-white/60 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6 fill-current text-white/60 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://x.com" aria-label="X Social">
              <XSocial className="w-6 h-6 fill-current text-white/60 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" aria-label="TikTok">
              <TiktokIcon className="w-6 h-6 fill-current text-white/60 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" aria-label="YouTube">
              <YoutubeIcon className="w-6 h-6 fill-current text-white/60 hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
