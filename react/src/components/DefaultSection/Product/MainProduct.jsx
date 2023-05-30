import './MainProduct.scss'
import { useNavigate}  from "react-router-dom"
import ProductHeader from "./ProductHeader"
import { useContext } from "react"
import Loader from "../../../views/Loader/Loader"
import axios from "axios"
import { HomeSectionContext } from '../../../context/HomeProvider'
import ProductItem from './MainProductElement/ProductItem'
import { useQuery } from 'react-query'
import { UserContext } from '../../../context/ContextProvider'

function MainProduct() {

    const { setThemeColor } = useContext(HomeSectionContext)
    const navigate = useNavigate()
    const { apiURL } = useContext(UserContext); 
    
    const fecthAPI = () => {
        const productApi = `${apiURL}/product`
        return async () => {
            const result = await axios.get(productApi) 
            .then(response => {
                    const restData = response.data
                    setThemeColor('#00506c')
                    return restData.product
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })
            return result
        }
    }
    
    const { data , isLoading, isError} = useQuery(`product`, fecthAPI(),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    var productData = []

    if(data)
        productData = data.data

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div>
            <ProductHeader/>
            <div id="product-main">
                <div className='wraper'>
                    {
                       productData.map((slug, index) => <ProductItem key={index} slug={slug} index={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MainProduct