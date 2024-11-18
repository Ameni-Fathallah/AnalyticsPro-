import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Close navbar if the window width is large (i.e., bigger than 'md' breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);  // Close navbar if the window size is greater than or equal to 768px
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call once on mount to check the current window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle the navbar on mobile view
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#0E0F1F]">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#FDDB3A] transition-transform transform hover:scale-105 hover:text-white cursor-pointer">AnalyticsPro </h1>

      {/* Desktop Navigation (Hidden on mobile) */}
      <ul className="hidden md:flex">
        {['Home', 'Company', 'Resources', 'About', 'Contact'].map((item, index) => (
          <li key={index} className="p-4 relative transition-all duration-300 transform hover:scale-110 hover:text-[#FDDB3A]">
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FDDB3A] transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Drawer with Blur Effect */}
      <div
        className={nav ? "fixed left-0 top-0 w-[40%] h-full bg-[#0E0F1F] backdrop-blur-md z-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 ease-in-out duration-500 z-10"}>
        <ul className="uppercase m-5 mt-10">
          {['Home', 'Company', 'Resources', 'About', 'Contact'].map((item, index) => (
            <li key={index} className="p-4 border-b border-gray-600 transition-transform transform hover:scale-110 hover:text-[#FDDB3A]">
              {item}
            </li>
          ))}
        </ul>
</div>

    </div>
  );
};

export default Navbar;
