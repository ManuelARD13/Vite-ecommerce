import { BrowserRouter, useRoutes } from 'react-router-dom';

import './App.css'


import Home from "../Home/Home"
import Login from "../Login/Login"
import MyAccount from "../MyAccount/MyAccount"
import MyOrder from "../MyOrder/MyOrder"
import MyOrders from "../MyOrders/MyOrders"
import NotFound from "../NotFound/NotFound"
import Layout from '../../components/Layout/Layout';
import { CartContext } from '../../context/CartContext';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:id', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '*', element: <NotFound /> }
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Layout>
          <AppRoutes />
        </Layout>
      </CartContext>
    </BrowserRouter>
  )
}

export default App
