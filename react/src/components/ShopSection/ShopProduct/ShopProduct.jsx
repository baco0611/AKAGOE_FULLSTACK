import { Link, useNavigate, useParams } from "react-router-dom"
import './ShopProduct.scss'
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import axios from "axios"
import { useQuery } from "react-query"
import Loader from "../../../views/Loader/Loader"
import ShopProductContaint from "./ShopProductContaint/ShopProductContaint"
import ShopRecommend from "./ShopRecommend/ShopRecommend"

function ShopProduct() {

    const { id } = useParams()

    const { apiURL } = useContext(UserContext); 
    const navigate = useNavigate()

    const fecthAPI = (id) => {
        const shopProductApi = `http://localhost:3001/${id}`
        // const searchApi = `${apiURL}/introduce/${slug}`
        return async () => {
            const result = await axios.get(shopProductApi) 
                .then(response => {
                    const restData = response.data
                    return restData.data[0]
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })
            return result
        }
    }

    const { data , isLoading, isError} = useQuery(`shop-product-${id}`, fecthAPI(id),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    console.log(data)

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const categoryName = data.category

    return(
        <div id="shop-product-section">
            <div className="shop-product-main">
                <div className="shop-product-nav">
                    <div className="wraper">
                        <Link to={'/shop'}>KIS-GE</Link>
                        <i className="ti-angle-right"></i>
                        <Link to={`/shop/category/${categoryName.toLowerCase()}`}>{capitalizeFirstLetter(categoryName)}</Link>
                    </div>
                </div>
                <ShopProductContaint data={data}/>
                <ShopRecommend id={data.id}/>
            </div>
        </div>
    )
}

export default ShopProduct