import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductDetail from '../ProductDetail/ProductDetail';
import { CartCTX } from '../../context/CartContext';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';

function Layout({ children }) {
  const { isActive, isCheckoutActive } = useContext(CartCTX);
  return (
    <>
      <Navbar />
      <div className="layout flex flex-col items-center">
        {children}
        { isActive && <ProductDetail /> }
        { isCheckoutActive && <CheckoutDetail /> }
      </div>
    </>
  );
}

export default Layout;