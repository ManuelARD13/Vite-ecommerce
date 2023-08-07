import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import { CartCTX } from '../../context/CartContext';

function CheckoutCard({ product }) {

  const { cartProducts, setCartProducts } = useContext(CartCTX);

  const deleteProduct = (product) => {
    const newCheckoutProducts = cartProducts?.filter(item => item.id !== product.id);
    setCartProducts(newCheckoutProducts)
  }

  return (
    <div className='flex justify-between p-3 gap-3 items-center border-b-2 border-gray w-full'>
      <figure className='w-20 h-20'>
        <img src={product.images[0]} alt={product.title}  className='w-full h-full rounded-lg object-cover'/>
      </figure>
      <p>
        <span className='text-sm font-light'>{product.title}</span>
      </p>
      <p>
        <span className='font-medium text-lg'>${product.price}</span>
      </p>
      <div>
        <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => deleteProduct(product)} />
      </div>
    </div>
  );
}

export default CheckoutCard;