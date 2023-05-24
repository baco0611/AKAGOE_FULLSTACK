import './ProductMain.scss'
import Character from './Character/Character'
import Explore from './Explore/Explore'
import Introduce from './Introduce/Introduce'
import Review from './Review/Review'
import Other from './Other/Other'

function ProductMain({ slug }) {
    return (
        <div id='main-section'>
            <Introduce slug={slug}/>
            <Explore slug={slug}/>
            <Character slug={slug}/>
            <Review slug={slug}/>
            <Other slug={slug}/>
        </div>
    )
}

export default ProductMain