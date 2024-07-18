import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import CompanyLogo from '../../public/CompanyLogo.png';

function Footer() {
  return (
    <>
      <div className="bg-zinc-800">
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 py-10 text-white">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-4">
            <img
              className="mb-5 w-full rounded-lg"
              src={CompanyLogo}
              alt="Company Logo"
            />
            <p className="flex text-sm md:text-base leading-tight items-center mb-5">
              <span className="mr-2">
                <FaLocationDot />
              </span>
              KRIN TOWER, C-3/97, VIBHUTI KHAND, GOMTI NAGAR, LUCKNOW - 226010
            </p>
            <p className="flex text-sm md:text-base leading-tight items-center mb-5">
              <span className="mr-2">
                <VscDebugDisconnect />
              </span>
              812sarita@gmail.com <br /> +91 7310720754
            </p>
            <div className="text-xl leading-tight mb-5">
              <h5>Follow Us On</h5>
              <div className="flex gap-4 mt-2">
                <Link to="/">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <BsInstagram />
                </Link>
                <Link to="/">
                  <FaLinkedin />
                </Link>
                <Link to="/">
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="h-px bg-zinc-500"></div>
        <div className="text-white font-normal py-5 mx-4 md:mx-10 text-sm md:text-base">
          © 2024 ABC | All Rights Reserved | T&C | Privacy Policy 
        </div>
      </div>
    </>
  );
}

export default Footer;
