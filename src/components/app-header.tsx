import { useAuth } from '@/hooks/useAuth'
import { Link, NavLink, useNavigate } from 'react-router-dom'


function AppHeader() {
    const auth = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        auth.clearUser()
        navigate("/auth/login")
    }
    
    return (
        <>
            <header className='border-solid'>
                <div className="logo py-3 border-b border-gray-300">
                    <div className="container mx-auto">
                        <Link to={'/'} className='font-bold text-black text-lg flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11Z"/></svg>
                            <span>Apple</span>
                        </Link>
                    </div>
                </div>
                <div className="nav border-b border-gray-200">
                    <div className="container mx-auto flex justify-between">
                        <ul className='flex items-center gap-5 py-3'>
                            <li>
                                <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={'nav-link'} to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className={'nav-link'} to={'/products'}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink className={'nav-link'} to={'/support'}>Support</NavLink>
                            </li>
                           
                        </ul>
                        <ul className='flex items-center gap-5 py-3'>
                            {!auth?.user ? (
                                <li>
                                    <NavLink className={'nav-link'} to={'/auth/login'}>Login</NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className={'nav-link'} to={'/cart'}>My Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={logout} className={'nav-link'} to={'#'}>Logout</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader