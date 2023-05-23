import { Outlet } from "react-router-dom"
import './HomeLayout.scss'
import Footer from "./Footer"
import HomeHeader from "./HomeHeader"

function ShopLayout() {
    return (
        <div id="default-section">
            {/* <HomeHeader/> */}

            <Outlet/>

            <Footer 
                theme = 'shop'
            />
        </div>
    )
}

export default ShopLayout