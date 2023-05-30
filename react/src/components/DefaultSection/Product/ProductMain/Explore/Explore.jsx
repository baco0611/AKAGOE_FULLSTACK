import axios from 'axios';
import './Explore.scss'
import Loader from '../../../../../views/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Explore({ slug, language }) {

    const [mainIndex, setMainIndex] = useState(0)
    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const exxploreApi = `http://localhost:3001/explore-${slug}`
        return async () => {
            const result = await axios.get(exxploreApi) 
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

    const { data , isLoading, isError} = useQuery(`explore-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id='explore-section'>
            <div className='explore-main wraper'>
                <div className='explore-content'>
                    <h1>EXPLORE</h1>
                    <div className='line'></div>
                    <div className='explore-main-content'>
                        {
                           data.map((data, index) => {
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
                       data.map((data, index) => {
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
                           data.map((data, index) => {
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
                           data.map((data, index) => {
                                return (
                                    <label 
                                        key={index} 
                                        htmlFor={`img-${index}`}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='explore-main-content'>
                        {
                           data.map((data, index) => {
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