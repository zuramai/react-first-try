import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'virtual:uno.css'
import './assets/style.css'
import router from './router'
import {
  RouterProvider
} from 'react-router-dom'
import axios from 'axios'


axios.defaults.baseURL = 'https://dummyjson.com'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
)
