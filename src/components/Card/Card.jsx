import React, { useContext } from 'react';
import { CartCTX } from '../../context/CartContext';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
function Card({ product }) {

  const { cartProducts, setCartProducts, setActive, setCheckoutActive, setProduct } = useContext(CartCTX);

  const showProduct = (product) => {
    setProduct(product)
    setCheckoutActive(false)
    setActive(true)
  }

  const isInCart = cartProducts.filter(item => item.id === product.id).length > 0;

  const deleteProduct = (product) => {
    const newCheckoutProducts = cartProducts.filter(item => item.id !== product.id);
    setCartProducts(newCheckoutProducts)
  }

  const addProduct = (product) => {
    setCartProducts([...cartProducts, product])
  }

  return (
    <div
      className='relative cursor-pointer bg-white w-56 h-60'
    >
      <figure
        className='relative mb-2 w-full h-4/5'
        onClick={() => showProduct(product)}
      >
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {product.category.name}
        </span>
        <img
          src={product.images[0]}
          alt=""
          className='w-full h-full object-cover rounded-lg'
        />

      </figure>
      <div
        className='absolute z-10 top-0 right-0 flex justify-center items-center m-2'
      >
        {isInCart ? <CheckIcon className='bg-green-400 w-6 h-6 rounded-full p-0.5' /> : <PlusIcon className='bg-gray-200 w-6 h-6 rounded-full p-0.5' onClick={() => addProduct(product)} />}
      </div>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  );
}

export default Card;