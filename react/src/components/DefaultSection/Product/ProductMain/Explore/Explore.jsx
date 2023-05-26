import { useEffect, useState } from 'react'
import axios from 'axios';
import './Explore.scss'
import Loader from '../../../../../views/Loader/Loader';
import { useNavigate } from 'react-router-dom';

function Explore({ slug, language }) {

    const [exploreData, setExploreData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [mainIndex, setMainIndex] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setExploreData(apiData.data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 
        
        setIsLoading(true)
        const exploreApi = `http://localhost:3001/explore-${slug}`
        fecthAPI(exploreApi)
    }, [slug])

    if(isLoading) 
        return <Loader/>

    return (
        <div id='explore-section'>
            <div className='explore-main wraper'>
                <div className='explore-content'>
                    <h1>EXPLORE</h1>
                    <div className='line'></div>
                    <div className='explore-main-content'>
                        {
                            exploreData.map((data, index) => {
                                return (
                                    <p 
                                        className={index === mainIndex ? '' : 'none'} 
                                        id={`for-img-${index}`} 
                                        key={index}>{data.content}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='explore-img'>
                    {
                        exploreData.map((data, index) => {
                            return (
                                <input 
                                    key={index} 
                                    type="radio" 
                                    name="testimonial" 
                                    id={`img-${index}`} 
                                    checked={index === mainIndex} 
                                    onChange={() => setMainIndex(index)}
                                />
                            )
                        })
                    }

                    <div className='explore-img-area'>
                        {
                            exploreData.map((data, index) => {
                                return (
                                    <label 
                                        key={index} 
                                        htmlFor={`img-${index}`} 
                                        className='item'
                                        // onClick={() => setMainIndex(index)}
                                    >
                                        <img src={data.image}/>
                                    </label>
                                )
                            })
                        }
                    </div>

                    <div className="dots">
                        {
                            exploreData.map((data, index) => {
                                return (
                                    <label 
                                        key={index} 
                                        htmlFor={`img-${index}`}
                                        // onClick={() => setMainIndex(index)}    
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='explore-main-content'>
                        {
                            exploreData.map((data, index) => {
                                return (
                                    <p 
                                        className={index === mainIndex ? '' : 'none'} 
                                        id={`for-img-${index}`} 
                                        key={index}>{data.content}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore