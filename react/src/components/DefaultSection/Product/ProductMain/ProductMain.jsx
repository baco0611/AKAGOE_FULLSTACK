import Explore from './Explore/Explore'
import Introduce from './Introduce/Introduce'
import './ProductMain.scss'

function ProductMain({ slug }) {
    return (
        <div id='main-section'>
            <Introduce slug={slug}/>
            <Explore slug={slug}/>
        </div>
    )
}

export default ProductMain