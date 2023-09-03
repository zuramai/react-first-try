import { useState } from 'react'
import AppHeader from './components/app-header'
import { Outlet } from 'react-router-dom'
import UnoCSS from 'unocss/vite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
    </>
  )
}

export default App
