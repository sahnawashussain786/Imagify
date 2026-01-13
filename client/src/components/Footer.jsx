import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-8 mt-20 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img
          src={assets.logo}
          width={150}
          alt="Imagify Logo"
          className="hover:opacity-80 transition-opacity duration-300"
        />
        <p className="border-t sm:border-t-0 sm:border-l border-gray-400 pt-2 sm:pt-0 pl-0 sm:pl-4 text-sm text-gray-500 max-sm:text-center">
          Copyright @sahnawashussain | All right reserved.
        </p>
      </div>
      <div className="flex gap-3">
        <img
          src={assets.facebook_icon}
          className="cursor-pointer w-9 hover:scale-110 hover:brightness-110 transition-all duration-300"
          alt="Facebook"
        />
        <img
          src={assets.twitter_icon}
          className="cursor-pointer w-9 hover:scale-110 hover:brightness-110 transition-all duration-300"
          alt="Twitter"
        />
        <img
          src={assets.instagram_icon}
          className="cursor-pointer w-9 hover:scale-110 hover:brightness-110 transition-all duration-300"
          alt="Instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
