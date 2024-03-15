import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import UserLayout from './Layouts/UserLayout/UserLayout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import WhichList from './Components/WhichList/WhichList'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import Signup from './Components/Signup/Signup'
import Signin from './Components/Signin/Signin'
import NotFound from './Components/NotFound/NotFound'
import Protect from './Components/Protect/Protect'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify';
import Context from './Components/Context/Context'
import Order from './Components/Order/Order'
import Allorders from './Components/Allorders/Allorders'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import ResetPass from './Components/ResetPass/ResetPass'
import AuthProtect from './Components/AuthProtect/AuthProtect'
import { Offline } from 'react-detect-offline'
export default function App() {
  let routers = createHashRouter([
    {
      path: '/', element: <AdminLayout />, children: [
        { index: true, element: <AuthProtect><Signup /></AuthProtect> },
        { path: 'Signup', element: <AuthProtect><Signup /></AuthProtect> },
        { path: 'Signin', element: <Signin /> },
        { path: 'ForgetPassword', element: <ForgetPassword /> },
        { path: 'ResetPass', element: <ResetPass /> },
        { path: '*', element: <NotFound /> },

      ]
    },
    {
      path: '/', element: <UserLayout />, children: [
        { index: true, element: <Protect> <Home /></Protect> },
        { path: 'Home', element: <Protect> <Home /></Protect> },
        { path: 'Cart', element: <Protect><Cart /></Protect> },
        { path: 'Products', element: <Protect><Products /></Protect> },
        { path: 'Categories', element: <Protect><Categories /></Protect> },
        { path: 'Brands', element: <Protect><Brands /></Protect> },
        { path: 'WhichList', element: <Protect><WhichList /></Protect> },
        { path: 'allorders', element: <Protect><Allorders /></Protect> },
        { path: 'Order/:id', element: <Protect><Order /></Protect> },
        { path: 'ProductDetails/:id', element: <Protect><ProductDetails /></Protect> },
        { path: '*', element: <NotFound /> },
      ]
    },

  ])

  return (
    <>
      <ToastContainer autoClose={700} position='bottom-right' />
      <Context>
        <RouterProvider router={routers} />
      </Context>
      <Offline>
      <div className="div alert-danger alert bottom-0 fw-bold   ms-4 position-fixed">No Internet Connection</div>
      </Offline>
    </>
  )
}
