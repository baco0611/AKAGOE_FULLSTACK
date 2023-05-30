import axios from "axios"
import Loader from "../../../../../views/Loader/Loader"
import './Review.scss'
import ReviewBlock from "./ReviewBlock"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"

function Review({ slug, language }) {

    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const reviewApi = `http://localhost:3001/review-${slug}`
        return async () => {
            const result = await axios.get(reviewApi) 
                .then(response => {
                    const restData = response.data
                    return restData.data
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })

            return result
        }
    }

    const { data , isLoading, isError} = useQuery(`review-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id="review-section">
            <div className="review wraper">
                <h1>What customers say about KIS-GE?</h1>
                <div className="review-main">
                    {
                        data.map((data, index) => {
                            return(
                                <ReviewBlock data={data} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Review