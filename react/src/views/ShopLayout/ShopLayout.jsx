import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import ShopContext from "../../context/ShopProvider"
import ShopHeader from "./ShopHeader/ShopHeader"

function ShopLayout() {
    return (
        <ShopContext>
            <div id="shop-section">
                <ShopHeader/>                

                <Outlet/>

                <Footer
                    theme = 'shop'
                />
            </div>
        </ShopContext>
    )
}

export default ShopLayout