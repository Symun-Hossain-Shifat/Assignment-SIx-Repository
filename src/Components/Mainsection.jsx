import React, { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const Mainsection = ({fetchpromise}) => {
   const [clicked,setCliked] =useState(true)

 const Datalist = use(fetchpromise);
 const maindata = Datalist.map( data => <Products data={data}></Products>)
    return (
        <div className=' my-20 space-y-3  w-10/12 mx-auto border text-center'>
            <div className='space-y-2'>
            <h4 className='font-bold text-5xl'>Premium Digital Tools</h4>
            <p className='text-gray-600 font-semibold'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            
            <div className='font-bold'>
                <button onClick={()=>setCliked(true)} className={`btn ${clicked?'bg-blue-600 , text-white':'bg-white text-black'} rounded-2xl`}>Products</button>
                <button onClick={()=>setCliked(false)} className={`btn ${!clicked?'bg-blue-600 , text-white':'bg-white text-black'} rounded-2xl`}>Carts</button>
            </div>
              <div className={`my-10 ${clicked?'grid grid-cols-1 md:grid-cols-3 gap-5':'flex gap-2 flex-col'}`}>
                {clicked?maindata:<Cart></Cart>}

              </div>
            
        </div>
    );
};

export default Mainsection;