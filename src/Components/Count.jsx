import React from 'react';

const Count = () => {
    return (
        <div className=' my-5 py-3 bg-gradient-to-r from-blue-800 to-blue-500'>
            <div className='text-white w-5/10 mx-auto justify-center items-center flex '>
                <div className='text-center border-r-2 px-5   items-center '>
                    <h2 className='font-bold text-3xl '>50K+</h2>
                    <p className='font-semibold'>Active Users</p>
                </div>
                 
                <div className='  text-center px-5 border-r-2 items-center'>
                    <h2 className='font-bold text-3xl '>200+</h2>
                    <p className='font-semibold'>Premium Tools</p>
                </div>
                   
                <div className=' text-center px-5  items-center'>
                    <h2 className='font-bold text-3xl '>4.9</h2>
                    <p className='font-semibold'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Count;