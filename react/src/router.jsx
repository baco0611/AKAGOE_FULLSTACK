import { Navigate, createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound'
import Shop from './views/ShopSection/Shop/Shop'
import About from './views/DefaultSection/About/About'
import { Product, MainProduct } from './views/DefaultSection/Product'
import { Home, HomeSection } from './views/DefaultSection/Home'

const router = createBrowserRouter([
        {
            path:'/',
            element: <HomeSection/>,
            children: [
                {
                    path:'/',
                    element: <Navigate to={'/home'}/>
                },
                {
                    path:'/home',
                    element: <Home/>
                },
                {
                    path:'/about',
                    element: <About/>
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
            path:'/shop',
            element: <Shop/>,
            children: [
                
            ]
        },
        {
            path:'*',
            element: <NotFound/>
        },
    ]
)

export default router