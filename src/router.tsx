import {
    createBrowserRouter,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Products from './pages/Products'
import Login from './pages/Login'

export default createBrowserRouter([
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
          path: '/about',
          element: <About /> 
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
])