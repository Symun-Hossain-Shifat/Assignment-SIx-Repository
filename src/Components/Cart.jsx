import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Cart = ({selected,setSelected,amount,setAmount}) => {
 const event = (data) => {
 setAmount(amount-data.price)
 }

    return (
        selected.length > 0 ? (<div className='border flex flex-col gap-5'>

            {selected.map(data => {
               return <div className='border p-2 flex items-center justify-between '>
                <div className='flex gap-2 items-center' >
                    <img className='w-7 h-7' src={data.icon} alt="" />
                <div className='text-left'>
                    <h2 className='font-bold text-1xl'>{data.name}</h2>
                    <p className='font-semibold text-gray-600'>$ {data.price}</p>

                </div>

                </div>

                <span onClick={()=>event(data)} className='bg-blue-100 rounded-full p-2'><RiDeleteBin5Line size={20} /></span>




               </div>

            })}
            <div className='flex bg-gray-100 items-center justify-between p-3'>
                <h3 className='font-bold text-2xl'>Total</h3>
                <p className='font-semibold text-2xl'>$ {amount}</p>
            </div>
            <button onClick={()=>{setSelected([]),setAmount(0)}}  className={`btn btn-block bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl text-white font-semibold`}>Proceed To Checkout</button>


  
        </div>):(<div className='bg-gray-50 p-5 rounded-2xl'>
            <h2 className='font-bold text-left text-2xl '>Your Cart</h2>
            <div className='justify-center items-center py-5'>
                <IoCartOutline size={50} className='mx-auto' />
                <p className='font-bold text-gray-700'>Your Cart Is Empty</p>
            </div>
        </div>)
        
        
        
    );
};

export default Cart;