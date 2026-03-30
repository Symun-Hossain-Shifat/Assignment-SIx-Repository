import React from 'react';

const Started = () => {
    return (
        <div className='text-center my-20  bg-gray-100 p-5'>
           <h2 className='font-extrabold text-2xl'>Get Started in 3 Steps</h2>
           <p className='text-gray-600 font-semibold'>Start using premium digital tools in minutes, not hours.</p>
        <div className='w-12/15 mx-auto items-center p-5 grid  gap-5 grid-cols-1 md:grid-cols-3'>
            <div className=' relative items-center bg-white rounded-2xl justify-center  p-3'>
                <div className=' items-center justify-center top-3 right-3 absolute w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 '>
                   <p className='text-white font-bold text-1xl'>1</p>
                </div>
                <img className='mx-auto bg-blue-100 p-3 rounded-full' src="src/assets/user.png" alt="" />
                <h3 className='font-bold text-2xl'>Create Account</h3>
                <p className='font-semibold text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='items-center relative bg-white  rounded-2xl justify-center  p-3'>
                 <div className=' items-center justify-center top-3 right-3 absolute w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 '>
                   <p className='text-white font-bold text-1xl'>2</p>
                </div>
                <img className='mx-auto bg-blue-100 p-3 rounded-full' src="src/assets/package.png" alt="" />
                <h3 className='font-bold text-2xl'>Create Account</h3>
                <p className='font-semibold text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='items-center relative bg-white  rounded-2xl justify-center p-3'>
                 <div className=' items-center justify-center top-3 right-3 absolute w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 '>
                   <p className='text-white font-bold text-1xl'>3</p>
                </div>
             
                     <img className='mx-auto  bg-blue-100 p-3 rounded-full ' src="src/assets/rocket.png" alt="" />

                
               
                <h3 className='font-bold text-2xl'>Create Account</h3>
                <p className='font-semibold text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            
        </div>
        
        
        </div>
    );
};

export default Started;