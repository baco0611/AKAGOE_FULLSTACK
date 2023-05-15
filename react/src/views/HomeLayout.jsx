import { Link, Outlet } from "react-router-dom"
import './HomeLayout.scss'
import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/ContextProvider"
import clsx from 'clsx'

import menuBtn from './img/menu-btn.png'
import userPic from './img/Person.png'
import shopPic from './img/shop-btn.png'
import logo from './img/textLogo.png'
import closeBtn from './img/closeBtn.png'
import Footer from "./Footer"

function HomeLayout() {

    const {user, token} = useContext(UserContext)
    const [activeMenu, setActiveMenu] = useState(false)
    const menuRef = useRef()

    const handelActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div id="default-section">
            <header className="wraper">
                <div className="direction">
                    <img 
                        src={menuBtn} 
                        className="icon cursorPointer"
                        onClick={handelActiveMenu}    
                    />
                    <Link to={'/'}>
                        <img src={logo} className="logo"/>
                    </Link>
                </div>
                <div className="login-user">
                    <Link to={'/shop'}>
                        <img src={shopPic} className="icon"/>
                    </Link>
                    <img src={userPic} className="icon"/>
                    {
                        token &&
                        <span>{user.name}</span> ||
                        (
                            <span>
                                <Link to={'/login'}>Login </Link>
                                / 
                                <Link to={'/signup'}> Register</Link>
                            </span>
                        )
                    }
                </div>
            </header>

            <nav 
                ref={menuRef} 
                className={clsx({
                    "active": activeMenu
                })}
            >
                <div className="navHeader">
                    <div>
                        <img 
                            src={closeBtn}
                            onClick={handelActiveMenu}
                            className="cursorPointer"
                        />
                        <img src={logo}/>
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

            <Outlet/>

            <Footer 
                theme = 'default'
            />
        </div>
    )
}

export default HomeLayout