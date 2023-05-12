import { Link, useParams } from "react-router-dom"

function MainProduct() {

    return (
        <div>
            MainProduct
            <Link to={'/product/hello'}>Hello</Link>
        </div>
    )
}

export default MainProduct