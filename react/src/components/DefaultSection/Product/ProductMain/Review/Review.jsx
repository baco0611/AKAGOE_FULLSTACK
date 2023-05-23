import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../../../../views/Loader/Loader"
import './Review.scss'

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
        
        // console.log(slug)
        const reviewApi = `http://localhost:3001/review-${slug}`
        fecthAPI(reviewApi)
    }, [slug])

    console.log(reviewData)

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
                                <div className="review-block" key={index}>
                                    <p>{data.content}</p>
                                    <div className="review-footer">
                                        <div className="review-img">
                                            <img src={data.image}/>
                                        </div>
                                        <div className="review-title">
                                            <div className="review-left">
                                                <h1>{data.name}</h1>
                                                <h3>{data.position}</h3>
                                            </div>
                                            <div className="review-right">
                                                <i className="ti-star"></i>
                                                <h1>{data.star}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Review