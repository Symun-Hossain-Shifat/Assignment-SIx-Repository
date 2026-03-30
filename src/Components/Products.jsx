import React from 'react';

const Products = ({data}) => {
    const Features = data.features;
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body text-left">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{data.name}</h2>
      
    </div>
    <div>
        <p className='font-semibold text-gray-600'>{data.description}</p>
    </div>
    <div>
        <h4 className='font-bold text-2xl flex  items-end'>${data.price} <p className='text-[15px] font-semibold text-gray-600'>/{data.period}</p></h4>
    </div>
     <ul>
        {Features.map(feature => {
            return(<li className='font-semibold text-gray-600'> <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{feature}</li>)
        })}
     </ul>
    <div className="mt-6">
      <button className="btn btn-block text-white font-semibold bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Products;