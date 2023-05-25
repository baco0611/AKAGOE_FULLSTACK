import './MainProduct.scss'
import { useNavigate}  from "react-router-dom"
import ProductHeader from "./ProductHeader"
import { useContext, useEffect, useState } from "react"
import Loader from "../../../views/Loader/Loader"
import axios from "axios"
import { HomeSectionContext } from '../../../context/HomeProvider'
import ProductItem from './MainProductElement/ProductItem'

function MainProduct() {

    const [isLoading, setIsLoading] = useState(true)
    const [gameList, setGameList] = useState([])
    const navigate = useNavigate()
    const { setThemeColor } = useContext(HomeSectionContext)
    
    useEffect(() => {
        const fecthAPI = async (api) => {  
            await axios.get(api)
            .then(response => {
                const apiData = response.data
                    setGameList(apiData.data)
                    setIsLoading(false)
                    setThemeColor('#00506c')
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 

        const api = 'http://localhost:3001/product'
        fecthAPI(api)
    }, [])

    if(isLoading)
        return <Loader/>

    return (
        <div>
            <ProductHeader/>
            <div id="product-main">
                <div className='wraper'>
                    {
                        gameList.map((data, index) => <ProductItem key={index} data={data} index={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MainProduct