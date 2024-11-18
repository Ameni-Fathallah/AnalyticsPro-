import React from 'react';

const Newsletter=()=>{
    return(
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3  '>
           
            <div  className='lg:col-span-2  my-4'>
                <h1 className='font-bold md:text-4xl sm:text-3xl  text-2xl py-2'>Want tips & tricks to optimize your flow ?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
           
            <div className='my-4'>  
            <div className='flex  flex-col sm:flex-row justify-between items-center w-full '>
                <input type="email" className='p-3 flex w-full rounded-md text-back' placeholder='Enter Email'/>
                <button className='bg-[#FDDB3A] text-[#202242] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify me</button>
            </div>
                <p>We care about the protection of your date .Read our <span className='text-[#FDDB3A]'>Privacy Policy.</span></p>

            </div>
            
            </div>
        </div>
    )
}

export default Newsletter;