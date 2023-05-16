import { Link, Outlet, useParams } from "react-router-dom"
import ProductHeader from "./ProductHeader"

function MainProduct() {

    return (
        <div>
            <ProductHeader/>
            MainProduct
            <Link to={'/product/akagoe'}>AKAGOE</Link>
        </div>
    )
}

export default MainProduct