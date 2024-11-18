import React from 'react';
import { motion } from 'framer-motion';
import Laptop from '../assets/laptop.png';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
                {/* Animated Image */}
                <motion.img 
                    src={Laptop} 
                    alt="/" 
                    className='w-[600px] mx-auto my-4'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
                {/* Content Section */}
                <motion.div
                    className='flex flex-col justify-center'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    <p className='text-[#FDDB3A] font-bold text-lg tracking-wider'>
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4 text-[#2a2d57]'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p className='text-[#2a2d57]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <motion.button
                        className='bg-[#232649] w-[200px] rounded-md py-3 mt-6 text-[#FDDB3A] font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-auto md:mx-0'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Analytics;
