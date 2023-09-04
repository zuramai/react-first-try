import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'virtual:uno.css'
import './assets/style.css'
import {
  BrowserRouter,
  RouterProvider
} from 'react-router-dom'
import axios from 'axios'
import { Router } from './router'
import { AuthProvider } from "./hooks/useAuth"


axios.defaults.baseURL = 'https://dummyjson.com'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/react-first-try'>
    <AuthProvider >
      <Router></Router>
    </AuthProvider>
  </BrowserRouter>
)
