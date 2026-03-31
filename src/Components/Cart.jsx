import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Cart = ({selected,setSelected,amount,setAmount}) => {
 const event = (data) => {
 toast(`${data.name} is Deleted`)
  const filterdata = selected.filter(item => item.name !== data.name); 
  setSelected(filterdata)
 setAmount(amount-data.price)
 }

    return (
        selected.length > 0 ? (<div className=' flex flex-col gap-5'>
            <h2 className='font-bold text-left text-2xl '>Your Cart</h2>

            {selected.map(data => {
               return <div className=' p-2 rounded-2xl  bg-gray-100 flex items-center justify-between '>
                <div className='flex gap-2 items-center' >
                    <img className='w-7 h-7' src={data.icon} alt="" />
                <div className='text-left'>
                    <h2 className='font-bold text-1xl'>{data.name}</h2>
                    <p className='font-semibold text-gray-600'>$ {data.price}</p>

                </div>

                </div>

                <span onClick={()=>event(data)} className='bg-blue-100 cursor-pointer rounded-full px-3 py-2'><p className='text-red-600 font-bold '>Remove</p></span>




               </div>

            })}
            <div className='flex items-center justify-between p-3'>
                <h3 className='font-bold text-2xl'>Total</h3>
                <p className='font-semibold text-2xl'>$ {amount}</p>
            </div>
            <button onClick={()=>{setSelected([]),setAmount(0),toast.warning('All Item Is Deleted')}}  className={`btn btn-block bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl text-white font-semibold`}>Proceed To Checkout</button>


  
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