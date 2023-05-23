import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"

function ShopLayout() {
    return (
        <div id="shop-section">
            {/* <HomeHeader/> */}

            <Outlet/>

            <Footer
                theme = 'shop'
            />
        </div>
    )
}

export default ShopLayout