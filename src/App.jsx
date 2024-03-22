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
import User from './Components/User/User'
import Start from './Components/Start/Start'
import OfflineDetector from './Components/OfflineDetector/OfflineDetector'
export default function App() {
  let routers = createHashRouter([
    {
      path: '/', element: <AdminLayout />, children: [
        { index: true, element: <AuthProtect><Start /></AuthProtect> },
        { path: 'Start', element: <AuthProtect><Start /></AuthProtect> },
        { path: 'Signup', element: <AuthProtect><Signup /></AuthProtect> },
        { path: 'Signin', element: <AuthProtect><Signin /></AuthProtect> },
        { path: 'ForgetPassword', element: <ForgetPassword /> },
        { path: 'ResetPass', element: <ResetPass /> },
        { path: '*', element: <NotFound /> },

      ]
    },
    {
      path: '/', element: <UserLayout />, children: [
        { index: true, element: <Protect><OfflineDetector><Home /></OfflineDetector></Protect> },
        { path: 'Home', element: <Protect><OfflineDetector><Home /></OfflineDetector></Protect> },
        { path: 'Cart', element: <Protect><OfflineDetector><Cart /></OfflineDetector></Protect> },
        { path: 'Products', element: <Protect><OfflineDetector><Products /></OfflineDetector></Protect> },
        { path: 'Categories', element: <Protect><OfflineDetector><Categories /></OfflineDetector></Protect> },
        { path: 'Brands', element: <Protect><OfflineDetector><Brands /></OfflineDetector></Protect> },
        { path: 'WhichList', element: <Protect><OfflineDetector><WhichList /></OfflineDetector></Protect> },
        { path: 'User', element: <Protect><OfflineDetector><User /></OfflineDetector></Protect> },
        { path: 'allorders', element: <Protect><OfflineDetector><Allorders /></OfflineDetector></Protect> },
        { path: 'Order/:id', element: <Protect><OfflineDetector><Order /></OfflineDetector></Protect> },
        { path: 'ProductDetails/:id', element: <Protect><OfflineDetector><ProductDetails /></OfflineDetector></Protect> },
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
