import { Outlet } from "react-router-dom"
import UserHeader from "../../components/UserSection/UserHeader/UserHeader"
import AdministratorContext from "../../context/AdministratorProvider"
import Footer from "../Footer/Footer"
import { useState } from "react"

function UserLayout() {

    return (
        <AdministratorContext>
            <div id="login-section">
                <UserHeader/>

                <Outlet/>

                <Footer/>
            </div>
        </AdministratorContext>
    )
}

export default UserLayout