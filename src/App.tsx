import AppHeader from './components/app-header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
    </>
  )
}

export default App
