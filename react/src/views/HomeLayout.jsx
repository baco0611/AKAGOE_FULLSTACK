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

            <footer>
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="header">
                            <h1>KIS-GE</h1>
                            <p>Children's dream come true</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-column">
                            <h4>Information</h4>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/product'}>Product</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Shopping</h4>
                            <Link to={'/shop/category/beauty'}>Beauty</Link>
                            <Link to={'/shop/category/fashion'}>Fashion</Link>
                            <Link to={'/shop/category/stationary'}>Stationary</Link>
                        </div>
                        <div className="footer-column information">
                            <h4>Contact</h4>
                            <div>
                                <h5>KIS-GE Company</h5>
                                <p><b>Address:</b> 56-1 Tojiin Kitamachi, Kita Ward, Kyoto, 603-8577, Japan</p>
                                <p><b>Phone:</b> +81 75-813-8137</p>
                            </div>
                            <div>
                                <h5>Đại học Khoa Học Huế</h5>
                                <p><b>Address:</b> Dãy H Phòng H106 70 Nguyễn Huệ Thành Phố Huế Trường Đại Học Khoa Học</p>
                                <p><b>Phone:</b> +84 336027529 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>&copy; Akagoe team - Bao Huynh Van Nguyen - Nguyen Thi Van Anh</p>
            </footer>
        </div>
    )
}

export default HomeLayout