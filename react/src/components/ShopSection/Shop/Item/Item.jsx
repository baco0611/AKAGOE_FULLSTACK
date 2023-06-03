import { Link } from "react-router-dom"

function Item({ name, price, company, imageUrl, path }) {
    return (
        <div className="best-item">
            <Link to={'/'}>
                <img src={imageUrl}/> 
            </Link>
            <div className="item-content">
                <Link to={'/'}>
                    <h1>{name}</h1>
                </Link>
                <h3>{company}</h3>
                <h2>{`$${price}`}</h2>
            </div>
        </div>
    )
}

export default Item