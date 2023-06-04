import { Link, Navigate, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './views/HomeLayout/HomeLayout'
import Home from './components/DefaultSection/Home/Home'
import About from './components/DefaultSection/About/About'
import ShopLayout from './views/ShopLayout/ShopLayout'
import Shop from './components/ShopSection/Shop/Shop'
import { Product, MainProduct } from './components/DefaultSection/Product'
import Category from './components/ShopSection/Category/Category'
import Cart from './components/ShopSection/Cart/Cart'
import { Login, NotFound, SignUp } from './components/UserSection'
import UserLayout from './views/UserLayout/UserLayout'

const defaultLanguage = localStorage.getItem("DEFAULT_LANGUAGE")

const router = createBrowserRouter([
        {
            path:'/',
            element: <HomeLayout/> ,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path:'/about',
                    element: <About/>,
                    children: [
                        {
                            path: '/about',
                            element: <About/>
                        }
                    ]
                }, 
                {
                    path:'/product',
                    element: <MainProduct/>
                },
                {
                    path:'/product/:slug',
                    element: <Product/>
                }
            ]
        },
        {
            path:'/',
            element: <ShopLayout/>,
            children: [
                {
                    path:'/shop',
                    element: <Shop/>
                },
                {
                    path:'/shop/category',
                    element: <Category/>
                },
                {
                    path:'/shop/category/:slug',
                    element: <Category/>
                },
                {
                    path:'/shop/cart',
                    element: <Cart/>
                }
            ]
        },
        {
            path: '/',
            element: <UserLayout/>,
            children: [
                {
                    path: '/login/:slug',
                    element: <Login/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
            ]
        },
        {
            path: '/fetchError/:slug',
            element: <NotFound/>
        },
        {
            path:'*',
            element: <NotFound/>
        },
    ]
)

export default router