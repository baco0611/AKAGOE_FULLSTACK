import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../../../../views/Loader/Loader"
import { useQuery } from "react-query"

function ProductItem({slug, index}) {

    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const titleApi = `http://localhost:3001/title-${slug}`
        return async () => {
            const response = await axios.get(titleApi)
            return response.data.data
        }
    }

    const { data , isLoading, isError} = useQuery(`title-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    if(index%2==0)
        return(
            <div className="product-item">
                <div className="product-img wow bounceInLeft" data-wow-duration="2.s">
                    <Link to={`/product/${slug}`}>
                        <img src={data.image} />
                    </Link>
                </div>
                <div className="product-info left">
                    <h1>{data.name}</h1>
                    <p>{data.content}</p>
                    <button>
                        <Link to={`/product/${slug}`}>See more</Link>
                    </button>
                </div>
            </div>
        )
        else
            return(
                <div className="product-item">
                    <div className="product-info right wow bounceInLeft" data-wow-duration="2.s">
                        <h1>{data.name}</h1>
                        <p>{data.content}</p>
                        <button>
                            <Link to={`/product/${slug}`}>See more</Link>
                        </button>
                    </div>
                    <div className="product-img">
                        <Link to={`/product/${slug}`}>
                            <img src={data.image} />
                        </Link>
                    </div>
                </div>
            )
            
}

export default ProductItem