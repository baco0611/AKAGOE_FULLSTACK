import { useContext, useEffect, useRef, useState } from 'react'
import './Home.scss'
import { HomeSectionContext } from '../../../context/HomeProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../views/Loader/Loader';
import axios from 'axios';

function Home() {
    
    const [homeData, setHomeData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { setThemeColor } = useContext(HomeSectionContext)

    // Create variable for stationary processing
    const imgRef = useRef()
    
    useEffect(() => {
        //fetch API
        const fecthAPI = async (api) => {
            await axios.get(api)
            .then(response => {
                const apiData = response.data
                        setHomeData(apiData.data)
                        setIsLoading(false)
                        setThemeColor('default')
                    })
                    .catch(error => {
                        console.log(error)
                        navigate('/fetcherror/broken')
                    })
            }

            setIsLoading(true)
            const homeApi = `http://localhost:3001/home-image`
            fecthAPI(homeApi)
    }, [])

    if(isLoading) 
        return <Loader/>
        
    return (
        <div id='home-section'>
            <div className='container'>
                <div className='home-image' ref={imgRef}>
                    <div className='home-slider'>
                        {
                            homeData.map((src, index) => {
                                return (
                                    <div key={index}  className='image-box'>
                                        <div className='shadow'></div>
                                        <img src={src}/>
                                    </div>
                                )
                            })
                        }   
                    </div>
                </div>
                <div className='home-content'>

                </div>
            </div>
        </div>
    )
}

export default Home