import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound'
import Shop from './views/ShopSection/Shop/Shop'
import Home from './views/DefaultSection/Home/Home'
import About from './views/DefaultSection/About/About'
import { Product, MainProduct } from './views/DefaultSection/Product'

const router = createBrowserRouter([
        {
            path:'/',
            element: <Home/>,
            children: [
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
            element: <Shop/>
        },
        {
            path:'*',
            element: <NotFound/>
        },
    ]
)

export default router