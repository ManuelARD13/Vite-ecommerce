import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { CartCTX } from '../../context/CartContext';

function Navbar() {

  const { setActive, setCheckoutActive, cartProducts } = useContext(CartCTX);

  const activeStyles = "underline underline-offset-4"

  const showCheckoutBar = () => {
    setActive(false)
    setCheckoutActive(true)
  }

  return (
    <nav className='flex justify-between items-center fixed z-50 top-0 w-full py-5 px-8 text-sm text-ligth bg-white shadow-md'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to={"/"}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/all"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/clothes"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/electronics"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            Elctronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/fornitures"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/toys"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/others"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          Swlman@platzi.com
        </li>
        <li>
          <NavLink
            to={"/my-account"}
            className={
              ({ isActive }) => isActive ? activeStyles : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={"/my-orders"}
          className={
            ({ isActive }) => isActive ? activeStyles : undefined
          }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
          to={"/login"}
          className={
            ({ isActive }) => isActive ? activeStyles : undefined
          }
          >
            Login
          </NavLink>
        </li>
        <li className='flex relative cursor-pointer' onClick={() => showCheckoutBar()}>
          <ShoppingBagIcon className='w-6 h-6' />
          <span 
            className={cartProducts?.length > 0 
              ? 'fixed right-6 top-3.5 w-4 h-4 flex justify-center items-center bg-green-400 rounded-full' 
              : 'hidden'}
          >
            {cartProducts?.length}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;