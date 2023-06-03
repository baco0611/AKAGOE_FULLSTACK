import Banner from './Banner/Banner'
import BestSeller from './BestSeller/BestSeller'
import './Shop.scss'

function Shop() {
    return (
        <div id="main-shop-section">
            <Banner/>
            <BestSeller/>
        </div>
    )
}

export default Shop