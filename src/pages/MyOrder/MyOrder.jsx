import React, { useContext } from 'react';
import { CartCTX } from '../../context/CartContext';
import CheckoutCard from '../../components/CheckoutCard/CheckoutCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link, useParams } from 'react-router-dom';

function MyOrder() {

  const { orders } = useContext(CartCTX);
  const i = useParams().id
  
  let index
  if(isNaN(i)) {
    index = orders.length - 1
  } else {
    index = i
  }
  
  

  return (
    <div>
      <div>
        <h1 className='m-6'>My Order</h1>
        <Link to={"/my-orders"}>
          <ChevronLeftIcon className='w-3 h-3 cursor-pointer' />
        </Link>
      </div>
      <div>
        <div>
          { 
          orders?.[index]?.date}
        </div>
        {
          orders?.[index]?.products?.map((product, index) => (
            <div key={product.name}>
              <CheckoutCard product={product} key={index} />
            </div>
          ))}
      </div>
      <div>
        <p className='flex justify-between items-center p-3'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-lg'>{`$${orders?.[index].price}`}</span>
        </p>
      </div>
    </div>
  );
}

export default MyOrder;