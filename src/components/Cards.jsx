import React from 'react';
import { motion } from 'framer-motion';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {/* Single User Card */}
                <motion.div 
                    className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.img 
                        className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Single}
                        alt="Single User"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    <h2 className='font-bold text-2xl py-8 text-center text-[#2a2d57]'>Single User</h2>
                    <p className='text-4xl font-bold text-center text-[#2a2d57]'>$149</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>500 GB Storage</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>1 User Allowed</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#FDDB3A] text-[#2a2d57] rounded-md px-6 py-3 mx-auto font-medium my-6 w-[200px] transition duration-300 hover:bg-yellow-400'>
                        Start Trial
                    </button>
                </motion.div>

                {/* Partnership Card */}
                <motion.div 
                    className='w-full flex flex-col bg-gray-100 shadow-xl p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.img 
                        className='w-20 mx-auto mt-[-3rem] bg-transparent'
                        src={Double}
                        alt="Partnership"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <h2 className='font-bold text-2xl py-8 text-center text-[#2a2d57]'>Partnership</h2>
                    <p className='text-4xl font-bold text-center text-[#2a2d57]'>$199</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>1 TB Storage</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>3 Users Allowed</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>Send up to 10 GB</p>
                    </div>
                    <button className='bg-[#FDDB3A] text-[#2a2d57] rounded-md px-6 py-3 mx-auto font-medium my-6 w-[200px] transition duration-300 hover:bg-yellow-400'>
                        Start Trial
                    </button>
                </motion.div>

                {/* Group Account Card */}
                <motion.div 
                    className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.img 
                        className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Triple}
                        alt="Group Account"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    <h2 className='font-bold text-2xl py-8 text-center text-[#2a2d57]'>Group Account</h2>
                    <p className='text-4xl font-bold text-center text-[#2a2d57]'>$299</p>
                    <div className='font-medium text-center'>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>5 TB Storage</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>10 Users Allowed</p>
                        <p className='py-2 mx-8 mt-8 border-b text-[#2a2d57]'>Send up to 20 GB</p>
                    </div>
                    <button className='bg-[#FDDB3A] text-[#2a2d57] rounded-md px-6 py-3 mx-auto font-medium my-6 w-[200px] transition duration-300 hover:bg-yellow-400'>
                        Start Trial
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Cards;
