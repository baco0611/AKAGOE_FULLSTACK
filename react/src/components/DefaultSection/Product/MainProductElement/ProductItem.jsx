import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../../../../views/Loader/Loader"

function ProductItem({data, index}) {

    const [productData, setProductData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        
        const fecthAPI = async (api) => {  
            await axios.get(api)
            .then(response => {
                const apiData = response.data
                setProductData(apiData.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                navigate('/fetcherror')
            })
        } 

        var productApi = `http://localhost:3001/title-${data}`
        setIsLoading(true)
        fecthAPI(productApi)
    }
    , [data])

    if(isLoading)
        return <Loader/>

    if(index%2==0)
        return(
            <div className="product-item">
                <div className="product-img wow bounceInLeft" data-wow-duration="2.s">
                    <Link to={`/product/${data}`}>
                        <img src={productData.image} />
                    </Link>
                </div>
                <div className="product-info left">
                    <h1>{productData.name}</h1>
                    <p>{productData.content}</p>
                    <button>
                        <Link to={`/product/${data}`}>See more</Link>
                    </button>
                </div>
            </div>
        )
        else
            return(
                <div className="product-item">
                    <div className="product-info right wow bounceInLeft" data-wow-duration="2.s">
                        <h1>{productData.name}</h1>
                        <p>{productData.content}</p>
                        <button>
                            <Link to={`/product/${data}`}>See more</Link>
                        </button>
                    </div>
                    <div className="product-img">
                        <Link to={`/product/${data}`}>
                            <img src={productData.image} />
                        </Link>
                    </div>
                </div>
            )
            
}

export default ProductItem