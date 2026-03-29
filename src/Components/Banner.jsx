import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className=' my-20 grid grid-cols-1 md:grid-cols-2 gap-5 w-10/12 mx-auto '>
            <div className='content-center p-5 space-y-2'>
                <button className='flex gap-2 p-2 bg-blue-50 items-center rounded-3xl'> <span><img src="src/assets/Group 5.png" alt="" /></span><p className='bg-gradient-to-l font-semibold from-blue-800 to-blue-600 bg-clip-text text-transparent'>New: AI-Powered Tools Available</p></button>
        <h1 className='text-3xl font-extrabold '>Supercharge Your <br /> Digital Workflow</h1>
        <p className='text-gray-600 font-semibold' >Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.

        Explore Products
    </p>

            <div className='flex gap-4'>
                <button className='btn btn-primary rounded-2xl'>Explore Products</button>
                <button className='btn btn-outline btn-primary rounded-2xl '> <CiPlay1 /> Watch Demo</button>
            </div>






            </div>
            
            
            
            
            <div className=''><img className='h-100 mx-auto ' src="src/assets/banner.png" alt="" /></div>
        </div>
    );
};

export default Banner;