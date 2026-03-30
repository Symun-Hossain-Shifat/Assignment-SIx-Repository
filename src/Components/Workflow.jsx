import React from 'react';

const Workflow = () => {
    return (
        <div className='text-white mt-20 py-10 bg-gradient-to-r from-blue-800 to-blue-500'>
            <div className='w-10/12 mx-auto items-center justify-center text-center p-5 space-y-3'>
            <h1 className='font-bold text-2xl '>Ready to Transform Your Workflow?</h1>
            <p className='font-semibold'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p> 
            <div className='flex gap-3 items-center justify-center'>
                <button className=' bg-white btn rounded-2xl btn-primary btn-outline'>Explore Products</button>
                <button className=' btn text-white rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500'>View Pricing</button>
            </div>
            <p className='font-semibold'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default Workflow;