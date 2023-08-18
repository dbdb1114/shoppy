import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './routes/user/Main';
import ProductDetail from './routes/user/ProductDetail';
import Login from './routes/Login';
import Cart from './routes/user/Cart';
import AdminMain from './routes/admin/AdminMain';
import ProductList from './routes/user/ProductList';
import AdminHeader from './component/header/AdminHeader';
import ProductSubmit from './routes/admin/ProductSubmit';
import ProductUpdate from './routes/admin/ProductUpdate';
import AdminProductList from './routes/admin/AdminProductList';
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/product/list",
        element: <ProductList/>
      },
      {
        path: "/product/detail/:productId",
        element: <ProductDetail/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    element: <AdminHeader/>,
    children: [
      {
        path: '/admin/main',
        element: <AdminMain/>
      },
      {
        path: '/admin/product',
        element: <AdminProductList/>
      },
      {
        path: '/admin/product/add',
        element: <ProductSubmit/>
      },
      {
        path: '/admin/product/info',
        element: <ProductUpdate/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
