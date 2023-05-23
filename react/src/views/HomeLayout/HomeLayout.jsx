import { Outlet } from "react-router-dom"
import './HomeLayout.scss'

import HomeHeader from "./HomeHeader"
import Footer from "../Footer/Footer"
import HomeContext from "../../context/HomeProvider"

function HomeLayout() {

    return (
        <HomeContext>
            <div id="default-section">
                <HomeHeader/>

                <Outlet/>

                <Footer 
                    theme = 'default'
                />
            </div>
        </HomeContext>
    )
}

export default HomeLayout