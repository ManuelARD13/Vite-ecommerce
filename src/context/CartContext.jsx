import React, { createContext, useEffect, useState } from 'react';

const CartCTX = createContext({});

function CartContext({children}) {

  const [isActive, setActive ] = useState(false);
  const [isCheckoutActive, setCheckoutActive ] = useState(false);
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [cartProducts, setCartProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [orders, setOrders] = useState([])

  useEffect(() => {
      const total = cartProducts.reduce((total, product) => total + product.price, 0);
      setTotalPrice(total);
  }, [cartProducts])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <CartCTX.Provider value={{
      isActive,
      setActive,
      isCheckoutActive,
      setCheckoutActive,
      userInput,
      setUserInput,
      products,
      product,
      setProduct,
      cartProducts,
      setCartProducts,
      totalPrice,
      orders,
      setOrders
    }}>
      {children}
    </CartCTX.Provider>
  );
}

export { CartContext, CartCTX };