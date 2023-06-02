import { useContext, useState } from 'react'
import './UserHeader.scss'
import { AdministratorSectionContext } from '../../../context/AdministratorProvider'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

function UserHeader() {
    
    const { adminTheme } = useContext(AdministratorSectionContext)
    const [activeMenu, setActiveMenu] = useState(false)

    const handelActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return(
        <header 
            id='header-section'
            style={
                adminTheme === "admin" &&
                {background: '#e1d1f0'} ||
                {background: '#F0D1E0'}
            }
        >
            <div className='wraper header-section'>
                <div className="header-direction">
                    <i
                        className="icon ti-menu cursorPointer"
                        onClick={handelActiveMenu}    
                    />
                    <Link to={'/'} className="home-title">KIS-GE</Link>
                </div>
                <div className='header-nav'>
                    {
                        adminTheme === '' 
                        ?
                            <Link to={'/shop'}>Go to shop now !!!</Link>
                        :
                            <Link to={'/'}>Dashboard</Link>
                    }
                </div>
            </div>

            <nav 
                className={clsx({
                    "active": activeMenu
                })}
            >
                <div 
                    className="navHeader"
                    style={
                        adminTheme === "admin" &&
                        {background: '#e1d1f0'} ||
                        {background: '#F0D1E0'}
                    }
                >
                    <div>
                        <i 
                            onClick={handelActiveMenu}
                            className="ti-close cursorPointer"
                        />
                        <span>KIS-GE</span>
                    </div>
                </div>
                <div className="navMain">
                    <ul>
                        <li>
                            <h3>
                                <Link to={'/'}
                                    onClick={handelActiveMenu}
                                >
                                    Home
                                </Link>
                            </h3>
                            <dl>
                                <dd>
                                    <Link to={'/about'}
                                        onClick={handelActiveMenu}
                                    >About us</Link>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <h3>
                                <Link to={'/product'}
                                    onClick={handelActiveMenu}
                                >
                                    Product
                                </Link>
                            </h3>
                            <dl>
                                <dd>
                                    <Link to={'/product/akagoe'}
                                        onClick={handelActiveMenu}
                                    >
                                        akagoe
                                    </Link>
                                </dd>
                                <dd>
                                    <Link to={'/product/soulhalo'}
                                        onClick={handelActiveMenu}
                                    >
                                        soulhalo
                                    </Link>
                                </dd>
                                <dd>
                                    <Link to={'/product/vot'}
                                        onClick={handelActiveMenu}
                                    >
                                        vọt
                                    </Link>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <h3><Link to={'/shop'}>Shop</Link></h3>
                            <dl>
                                <dd>
                                    <Link to={'/shop/category/beauty'}>Beauty</Link>
                                </dd>
                                <dd>
                                    <Link to={'/shop/category/fashion'}>fashion</Link>
                                </dd>
                                <dd>
                                    <Link to={'/shop/category/stationary'}>stationary</Link>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default UserHeader