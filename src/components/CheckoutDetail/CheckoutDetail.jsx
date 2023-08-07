import React, { useContext } from 'react';
import { CartCTX } from '../../context/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CheckoutCard from '../CheckoutCard/CheckoutCard';
import "./CheckoutDetail.css"
import { Link } from 'react-router-dom';

function CheckoutDetail() {
  const { setCheckoutActive, cartProducts, setCartProducts, totalPrice, orders, setOrders } = useContext(CartCTX);

  const handleCheckout = () => {
    const newOrder = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      price: totalPrice
    }
    setOrders([...orders, newOrder])
    setCartProducts([])
    setCheckoutActive(false)
  }

  return (
    <aside className='checkout-detail slide-in-right flex flex-col fixed z-20 bg-white right-0 border border-gray rounded-lg shadow-2xl'>
      <div className='flex justify-between items-center p-6 border-b-2 border-gray'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => setCheckoutActive(false)}>
          <XMarkIcon className='w-8 h-8 cursor-pointer' />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll overflow-x-hidden flex-1'>
        {cartProducts?.map(product => (
          <CheckoutCard key={product.id} product={product} />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center p-3'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-lg'>${totalPrice}</span>
        </p>
        <Link
          to={"/my-order/last"}
        >
          <button
            className='bg-black w-full text-white rounded-lg py-3'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutDetail;