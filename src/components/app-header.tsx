import { Link } from'react-router-dom'

function AppHeader() {
    return (
        <>
            <header className='text-center border-b border-gray-500 border-solid'>
                <div className="container mx-auto max-w-[500px] ">
                    <div className="logo py-3">
                        <Link to={'/'}>Apple</Link>
                    </div>
                    <div className="nav">
                        <ul className='flex justify-center items-center gap-5 py-3'>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Our Products</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader