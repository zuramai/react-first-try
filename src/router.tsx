import {
    createBrowserRouter,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Products from './pages/Products'

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
          path: '*',
          element: <Error />
        }
      ]
    }
])