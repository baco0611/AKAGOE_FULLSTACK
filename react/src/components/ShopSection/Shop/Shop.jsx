import Banner from './Banner/Banner'
import BestSeller from './BestSeller/BestSeller'
import './Shop.scss'
import ShopCategory from './ShopCategory/ShopCategory'

function Shop() {
    return (
        <div id="main-shop-section">
            <Banner/>
            <BestSeller/>
            <ShopCategory/>
        </div>
    )
}

export default Shop