import React from 'react';
import { ReactTyped } from "react-typed"; // Correct import for ReactTyped

const Hero = () => {
    return (
        <div className="text-white bg-gradient-to-br bg-[#0E0F1F] h-screen width-full">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center  ">

                <p className="text-[#FDDB3A] font-bold text-lg sm:text-xl p-2 tracking-wider">
                    GROWING WITH DATA ANALYTICS
                </p>

   
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6">
                    Grow with Data.
                </h1>

                <div className="flex justify-center items-center mt-4">
                    <p className="md:text-5xl sm:text-4xl text-3xl font-semibold">
                        Fast, flexible financing for
                    </p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-3xl text-[#FDDB3A] font-bold pl-2"
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>

                <p className="md:text-xl text-lg font-medium text-gray-400 mt-4">
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
                </p>

                <button className="bg-[#FDDB3A] w-[200px] rounded-md font-medium mt-6 mx-auto py-3 text-[#2a2d57] transition-all transform hover:scale-110 hover:bg-[#FFC700] hover:shadow-[0_0_20px_#FDDB3A] duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
