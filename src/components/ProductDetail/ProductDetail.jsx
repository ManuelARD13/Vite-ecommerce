import React, { useContext } from 'react';
import "./ProductDetail.css"
import { CartCTX } from '../../context/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ProductDetail() {
  const { setActive, product } = useContext(CartCTX);

  return (
    <aside className='product-detail slide-in-right flex flex-col z-20 h-full fixed bg-white right-0 border border-gray rounded shadow-2xl'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => setActive(false)}>
          <XMarkIcon className='w-8 h-8 cursor-pointer' />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full rounded-lg'
          src={product.images[0]}
          alt={product.title}
        />
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl'>${product.price}</span>
          <span className='font-medium text-md'>${product.title}</span>
          <span className='font-light text-sm'>${product.description}</span>
        </p>
      </figure>
    </aside>
  );
}

export default ProductDetail;