import './MainProduct.scss'
import { useNavigate}  from "react-router-dom"
import ProductHeader from "./ProductHeader"
import { useContext, useEffect, useState } from "react"
import Loader from "../../../views/Loader/Loader"
import axios from "axios"
import { HomeSectionContext } from '../../../context/HomeProvider'
import ProductItem from './MainProductElement/ProductItem'
import { useQuery } from 'react-query'

function MainProduct() {

    const { setThemeColor } = useContext(HomeSectionContext)
    const navigate = useNavigate()
    
    const fecthAPI = async () => {
        const productApi = `http://localhost:3001/product`
        const response = await axios.get(productApi)
        setThemeColor('#00506c')
        return response.data.data
    }
    
    const { data , isLoading, isError} = useQuery(`product`, fecthAPI,{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })
    
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
                       data.map((slug, index) => <ProductItem key={index} slug={slug} index={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MainProduct