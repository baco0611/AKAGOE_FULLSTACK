import { useContext, useRef, useState } from 'react'
import './ShopHeader.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { UserContext } from '../../../context/ContextProvider'
import { ShopSectionContext } from '../../../context/ShopProvider'

function ShopHeader() {

    const {user, token} = useContext(UserContext)
    const [activeMenu, setActiveMenu] = useState(false)
    const { numberOfCart, searchValue, setSearchValue, searchProduct } = useContext(ShopSectionContext)
    const searchRef = useRef()

    const handelActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <header id='header-section'>
            <div className='header wraper'>
                <div>
                    <div className="direction">
                        <i
                            className="icon ti-menu cursorPointer"
                            onClick={handelActiveMenu}    
                        />
                        <Link to={'/shop'} className="home-title">KIS-GE</Link>
                    </div>
                </div>
                <div id='search-bar'>
                    <div className='user-search'>
                        <input 
                            ref={searchRef}
                            name='search-bar' 
                            placeholder='What are you looking for ...' 
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <i 
                            className='ti-search'
                            onClick={() => searchProduct(searchRef.current.value)}
                        ></i>
                    </div>
                    <div className='user-cart'>
                        <Link to={'/shop/cart'}>
                            <i className='ti-shopping-cart icon'></i>
                        </Link>
                        <span className='user-cart-number'>{numberOfCart <= 99 ? numberOfCart : '99+'}</span>
                    </div>
                </div>
                <div className='login-user'>
                    <i 
                        className="icon ti-user"
                    />
                    {
                        token &&
                        <span
                        >{user.name}</span> ||
                        (
                            <span>
                                <Link 
                                    to={'/login'}
                                >Login </Link>
                                / 
                                <Link 
                                    to={'/signup'}
                                > Register</Link>
                            </span>
                        )
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
                            <h3><Link to={'/category'}>Category</Link></h3>
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default ShopHeader