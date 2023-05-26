import './Product.scss'
import { useParams } from "react-router-dom"
import ProductHeader from './ProductHeader'
import ProductMain from './ProductMain/ProductMain'
import { useContext, useEffect } from 'react'
import { HomeSectionContext } from '../../../context/HomeProvider'

function Product() {

    const { slug } = useParams()
    var defaultLanguage = localStorage.getItem('DEFAULT_LANGUAGE')
    const { setThemeColor } = useContext(HomeSectionContext)
    
    useEffect(() => {
        setThemeColor('#00506c')
    },)

    return (
        <div id="product-section">
            <ProductHeader slug={slug} language={defaultLanguage}/>
            <ProductMain slug={slug} language={defaultLanguage}/>
        </div>
    )
}

export default Product