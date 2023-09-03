import {
    createBrowserRouter,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'

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