import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'

import Products from './components/Products/Products.jsx'
import Offer from './components/Offer/Offer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path = '' element = {<Home/>} />
      <Route path = 'services' element = {<Services/>} />
      <Route path = 'products' element = {<Products/>} />
      <Route path = 'offer' element = {<Offer/>} />


    </Route> 
  )
) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
