import { Link } from "react-router-dom"

function ShopCategoryItem({ image, title }) {

    const path = `/shop/category/${title.toLowerCase()}`

    return (
        <div className="shop-category-item">
            <Link to={path}>
                <img src={image}/>
            </Link>
            <Link to={path}>
                <h1>{title}</h1>
            </Link>
        </div>
    )
}

export default ShopCategoryItem