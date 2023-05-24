import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../../../../views/Loader/Loader"
import './Review.scss'
import ReviewBlock from "./ReviewBlock"

function Review({ slug }) {

    const [reviewData, setReviewData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setReviewData(apiData.data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
        } 
        
        setIsLoading(true)
        const reviewApi = `http://localhost:3001/review-${slug}`
        fecthAPI(reviewApi)
    }, [slug])


    if(isLoading)
        return <Loader/>

    return (
        <div id="review-section">
            <div className="review wraper">
                <h1>What customers say about KIS-GE?</h1>
                <div className="review-main">
                    {
                        reviewData.map((data, index) => {
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