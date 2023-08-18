import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './routes/user/Main';
import ProductDetail from './routes/user/ProductDetail';
import Login from './routes/Login';
import Cart from './routes/user/Cart';
import AdminMain from './routes/admin/AdminMain';
import { Children } from 'react';
import Header from './routes/user/Header';
import ProductList from './routes/user/ProductList';
import AdminHeader from './routes/admin/AdminHeader';
import ProductSubmit from './routes/admin/ProductSubmit';
import ProductUpdate from './routes/admin/ProductUpdate';
import AdminProductList from './routes/admin/AdminProductList';

const router = createBrowserRouter([
  {
    element: <Header/>,
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

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
