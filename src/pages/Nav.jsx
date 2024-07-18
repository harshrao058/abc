import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "../components/Dropdown";
import CompanyLogo from '../../public/CompanyLogo.png'

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#E88100] text-white px-4 md:px-20 py-4 z-50 sticky  top-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="w-52">
          <img src={CompanyLogo} alt="" className="rounded"/>
        </NavLink>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              className="text-white cursor-pointer"
              size={24}
              onClick={toggleMobileMenu}
            />
          ) : (
            <FaBars
              className="text-white  cursor-pointer"
              size={24}
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-10 text-[1.3vw] text-white items-center">
          {/* <Dropdown
            buttonText="Products"
            buttonColor="text-gray-800 "     
            buttonHoverColor="hover:bg-gray-200"
            menuItems={[
              { to: "/products", label: "All Products" },
              { to: "/products/category1", label: "Category 1" },
              { to: "/products/category2", label: "Category 2" },
            ]}
          /> */}
          <NavLink to="/servic">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/whoweare">Contact Us</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white text-black w-full fixed top-14 left-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto inl">
            <div className="inline-block">
              {/* <Dropdown
                buttonText="Products"
                buttonColor="bg-[#0B72BF]"
                buttonHoverColor="hover:bg-gray-200"
                menuItems={[
                  { to: "/products", label: "All Products" },
                  { to: "/products/category1", label: "Category 1" },
                  { to: "/products/category2", label: "Category 2" },
                ]}
              /> */}
            </div>
            <NavLink
              to="/servic"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/whoweare"
              className="block mt-2 font-normal"
              onClick={closeMobileMenu}
            >
             Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
