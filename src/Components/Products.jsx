import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Products = ({data,selected,setSelected,amount,setAmount}) => {
    const Features = data.features; 
    const [clicked , setCliked] = useState(true)

 const btnhandle = (data) => {
  
  
  
  if(clicked === true){
    
      setSelected([...selected,data])
      setCliked(false)
      setAmount(amount+data.price)
      toast( `${data.name} "Is Selected"`)
   
  
  
  }else{
    toast.warning(`${data.name} "Is Already Selected"`)
    return;
}
 }


    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body text-left flex flex-col relative">
    <span className={`badge items-center justify-center rounded-2xl p-3 ${data.tag === 'new'?'badge-warning':data.tag === 'popular'?'badge-primary' :'badge-success'} absolute top-3 right-3`}>{data.tag}</span>
   <img className='w-7 h-7' src={data.icon} alt="" />
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
    <div className="mt-auto">
      <button onClick={()=>{btnhandle(data)}} className={`btn btn-block text-white font-semibold  ${clicked?'bg-gradient-to-r from-blue-800 to-blue-600':'bg-green-500'} rounded-2xl`}>{clicked?'Buy Now':'Added To Cart'}</button>
    </div>
  </div>
</div>
    );
};

export default Products;