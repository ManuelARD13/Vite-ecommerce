import React, { useContext } from 'react';
import { CartCTX } from '../../context/CartContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrders() {

  const { orders } = useContext(CartCTX);

  return (
    <div className='w-3/12'>
      <div className='flex items-center justify-center'>
        <h1>My Orders</h1>
      </div>
      <div>
        {orders?.map((order, index) => (
          <div key={index} className='flex justify-between items-center p-3 cursor-pointer w-11 border-gray-400 rounded-lg'>
            <div className='flex flex-col'>
              <p>
                <span>{order.date}</span>
              </p>
              <p>
                <span>{order.products.length}</span>
              </p>
            </div>
            <p>{order.price}</p>
            <Link to={`/my-order/${orders.indexOf(order)}`}>
              <ChevronRightIcon className='w-3 h-3'/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;