import './Product.scss'
import { useNavigate, useParams } from "react-router-dom"
import ProductHeader from './ProductHeader'
import ProductMain from './ProductMain/ProductMain'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/ContextProvider'

function Product() {

    const { slug, language } = useParams()
    const { defaultLanguage, setDefaultLanguage } = useContext(UserContext)
    const navigate = useNavigate()
    console.log(slug, language)

    useEffect(() => {
        if(!language) 
            navigate(`/product/${slug}/${defaultLanguage}`)
        else {
            if(['vie', 'eng', 'jpn'].includes(language))
                setDefaultLanguage(language)
            else
                navigate(`/product/${slug}/${defaultLanguage}`)
        }
    }, [])

    return (
        <div id="product-section">
            <ProductHeader slug={slug} />
            <ProductMain slug={slug} />
        </div>
    )
}

export default Product