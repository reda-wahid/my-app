import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Product from './component/Context.js';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Cart from './component/CartPay.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/products",
    element: <Product/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/products/cart/:id",
    element: <Product/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

