import React from 'react'
import { useSelector } from 'react-redux';
import { clearItems } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
export default function Cart() {
    const cartItems=useSelector((store)=>store.cart.cartItems);
    const dispatch=useDispatch();
    const clearCartHandler=()=>dispatch(clearItems());
  return (
    <div className='max-w-5xl mx-auto mt-10'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-xl'>Cart-({cartItems.length})</h1>
        <button onClick={clearCartHandler} className="bg-black text-white rounded-md px-4 py-1">Clear Cart</button>
        </div>
        {cartItems.map((items,index)=>(
            
            <div key={items.id || index} className="max-w-5xl mx-auto mt-10">
        <div className="border border-gray-600 rounded-sm p-6">
           <img className="w-32" src={items.image}/>
            <h1 className="font-bold text-xl">{items.title}</h1>
            <p className="font-bold text-gray-700">{items.rating?.rate} ratings</p>
            <p className="font-bold text-gray-700">Price: $ {items.price}</p> 
            <p>{items.description}</p>
        </div> 
       </div> 
        ))

        }
    </div>
  )
}
