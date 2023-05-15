import { useEffect, useState } from 'react'
import './Explore.scss'

function Explore({ slug }) {

    const [exploreData, setExploreData] = useState([])
    const [mainIndex, setMainIndex] = useState(0)

    // console.log(exploreData)

    useEffect(() => {
        const fecthAPI = async (api) => {
            await fetch(api)   
            .then(response => response.json())
            .then(data => setExploreData(data.data))    
        } 
        
        const exploreApi = 'http://localhost:3001/explore-data'
        fecthAPI(exploreApi)
    }, [])

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
                                    index!==mainIndex
                                    ?
                                        <p className='none' id={`for-img-${index}`} key={index}>{data.content}</p>
                                    :
                                        <p id={`for-img-${index}`} key={index}>{data.content}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='explore-img'>
                    {
                        exploreData.map((data, index) => {
                            return (
                                index!==mainIndex
                                ?
                                    <input key={index} type="radio" name="testimonial" id={`img-${index}`}/>
                                :    
                                    <input key={index} type="radio" name="testimonial" id={`img-${index}`} checked={true}/>
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
                                        onClick={() => setMainIndex(index)}
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
                                        onClick={() => setMainIndex(index)}    
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='explore-main-content'>
                        {
                            exploreData.map((data, index) => {
                                return (
                                    index!==mainIndex 
                                    ?
                                        <p className='none' id={`for-img-${index}`} key={index}>{data.content}</p>
                                    :
                                        <p id={`for-img-${index}`} key={index}>{data.content}</p>
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