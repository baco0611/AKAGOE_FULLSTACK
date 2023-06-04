import { Link } from 'react-router-dom'
import './ShopItem.scss'

function ShopItem({ name, image, id, price, company, sale }) {
    return(
        <Link className= "search-item" to={`/shop/item/${id}`}>
            <img src={image}/>
            <div className='search-item-content'>
                <h1>{name}</h1>
                <h4>{company}</h4>
                <h2>{`$${price}`}</h2>
                <h3>{`Sold ${sale}`}</h3>
            </div>
        </Link>
    )
}

export default ShopItem