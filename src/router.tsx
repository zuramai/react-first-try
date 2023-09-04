import {
  useRoutes
} from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home /> 
        },
        {
          path: '/products',
          element: <Products /> 
        },
        {
          path: '/products/:productId',
          element: <ProductDetail /> 
        },
        {
          path: '/about',
          element: <About /> 
        },
        {
          path: '/cart',
          element: <Cart /> 
        },
        {
          path: '/auth/login',
          element: <Login /> 
        },
        {
          path: '*',
          element: <Error />
        }
      ]
    }
]

export const Router = () => {
  return useRoutes(routes)
}