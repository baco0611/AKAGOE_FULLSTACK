import { Link } from 'react-router-dom'
import ShopCategoryItem from '../Item/ShopCategoryItem'
import './ShopCategory.scss'
import * as ItemBanner from './img'

function ShopCategory() {

    return (
        <section className='shop-category'>
            <div className='shop-category-header'>
                <h1>Category</h1>
                <p>Find what you are looking for</p>
            </div>
            <div className='shop-category-main'>
                <div className='shop-category-img'>
                    <ShopCategoryItem image={ItemBanner.livingBanner} title='Living'/>
                    <ShopCategoryItem image={ItemBanner.fashionBanner} title='Fashion'/>
                    <ShopCategoryItem image={ItemBanner.stationaryBanner} title='Stationary'/>
                </div>
                <div className='shop-category-content'>
                    <p>Let's explore our product categories<br/>Enjoy your shopping with us</p>
                    <Link to={'/shop/category'}>
                        <button>
                            <span>Explore</span>
                            <i className='ti-arrow-right'></i>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ShopCategory