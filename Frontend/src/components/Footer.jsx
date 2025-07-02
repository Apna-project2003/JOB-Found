import React from "react";
import Icons from "../assets/target_8859880.png";
import Instagram from "../assets/icons8-instagram-48.png";
import Facebook from "../assets/icons8-facebook-48.png";
import Pintereset from "../assets/icons8-pinterest-48.png";
const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img width={90} src={Icons} alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @AryanTech.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img
          width={28}
          src={Instagram}
          alt="Instagram"
          className="hover:opacity-80 cursor-pointer"
        />
        <img
          width={28}
          src={Facebook}
          alt="Facebook"
          className="hover:opacity-80 cursor-pointer"
        />
        <img
          width={28}
          src={Pintereset}
          alt="Pinterest"
          className="hover:opacity-80 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
