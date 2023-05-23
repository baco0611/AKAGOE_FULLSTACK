import Character from './Character/Character'
import Explore from './Explore/Explore'
import Introduce from './Introduce/Introduce'
import './ProductMain.scss'
import Review from './Review/Review'

function ProductMain({ slug }) {
    return (
        <div id='main-section'>
            <Introduce slug={slug}/>
            <Explore slug={slug}/>
            <Character slug={slug}/>
            <Review slug={slug}/>
        </div>
    )
}

export default ProductMain