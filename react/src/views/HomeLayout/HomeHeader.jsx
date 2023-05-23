import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { UserContext } from "../../context/ContextProvider"
import clsx from 'clsx'
import "./HomeLayout.scss"

import { HomeSectionContext } from "../../context/HomeProvider"

function HomeLayout() {

    const {user, token} = useContext(UserContext)
    const {themeColor} = useContext(HomeSectionContext)
    const [activeMenu, setActiveMenu] = useState(false)
    const menuRef = useRef()

    const handelActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <>
            <header className="wraper"
                style={{
                    borderColor: themeColor!='default'?themeColor:'white'
                }}
            >
                <div className="direction">
                    <i
                        className="icon ti-menu cursorPointer"
                        style={{
                            color: themeColor!='default'?themeColor:'white'
                        }}
                        onClick={handelActiveMenu}    
                    />
                    <Link to={'/'} 
                        className="home-title"
                        style={{
                            color: themeColor!='default'?themeColor:'white'
                        }}
                    >KIS-GE</Link>
                </div>
                <div className="login-user">
                    <Link to={'/shop'}>
                        <i 
                            className="icon ti-shopping-cart"
                            style={{
                                color: themeColor!='default'?themeColor:'white'
                            }}
                        />
                    </Link>
                    <i 
                        className="icon ti-user"
                                style={{
                            color: themeColor!='default'?themeColor:'white'
                        }}
                    />
                    {
                        token &&
                        <span
                            style={{
                                color: themeColor!='default'?themeColor:'white'
                            }}
                        >{user.name}</span> ||
                        (
                            <span 
                                style={{
                                    color: themeColor!='default'?themeColor:'white'
                                }}
                            >
                                <Link 
                                    to={'/login'}
                                    style={{
                                        color: themeColor!='default'?themeColor:'white'
                                    }}
                                >Login </Link>
                                / 
                                <Link 
                                    to={'/signup'}
                                    style={{
                                        color: themeColor!='default'?themeColor:'white'
                                    }}
                                > Register</Link>
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
        </>
    )
}

export default HomeLayout