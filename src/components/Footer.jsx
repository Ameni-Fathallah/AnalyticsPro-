import React from 'react';
import {
    FaDribbbleSquare ,
    FaFacebookSquare ,
    FaGithubSquare ,
    FaInstagram ,
    FaTwitterSquare 
} from'react-icons/fa'

const Footer=()=>{
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 flex flex-col'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#FDDB3A]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                <div className='flex justify-between md:w-[%75] my-6 '>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={30} className="text-[#FDDB3A] hover:text-white transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-[#FDDB3A] hover:text-white transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare size={30} className="text-[#FDDB3A] hover:text-white transition duration-300" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={30} className="text-[#FDDB3A] hover:text-white transition duration-300" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <FaDribbbleSquare size={30} className="text-[#FDDB3A] hover:text-white transition duration-300" />
            </a>
        </div>
            </div>
        
            <div className='lg:col-span-2 mt-6 flex justify-between ml-10 mr-10'>
            <div>
        <h6 className="font-medium text-gray-400 mb-3">Solutions</h6>
        <ul>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Analytics</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Marketing</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Commerce</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Insights</li>
        </ul>
    </div>
    <div>
        <h6 className="font-medium text-gray-400 mb-3">Support</h6>
        <ul>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Pricing</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Documentation</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Guides</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">API Status</li>
        </ul>
    </div>
    <div>
        <h6 className="font-medium text-gray-400 mb-3">Company</h6>
        <ul>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">About</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Blog</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Jobs</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Press</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Partners</li>
        </ul>
    </div>
    <div>
        <h6 className="font-medium text-gray-400 mb-3">Legal</h6>
        <ul>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Legal</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Claim</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Privacy</li>
            <li className="py-2 text-sm transition-transform transform hover:scale-105 hover:text-gray-600">Terms</li>
        </ul>
    </div>



        </div></div>
    )
}

export default Footer;