import { useContext, useEffect, useState } from 'react'
import './Home.scss'
import { HomeSectionContext } from '../../../context/HomeProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../views/Loader/Loader';
import axios from 'axios';

import Section1 from './Section/Section1/Section1';
import Title from './Title/Title';
import Section2 from './Section/Section2/Section2';
import Section3 from './Section/Section3/Section3';
import Section4 from './Section/Section4/Section4';

function Home() {
    
    const [homeData, setHomeData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { setThemeColor } = useContext(HomeSectionContext)
    const [translate, setTranslate] = useState(0)
    const width = 3 * window.innerWidth + window.innerHeight 


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

    useEffect(() => {
        const handleScroll = () => {
                setTranslate(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if(isLoading) 
        return <Loader/>
        
    return (
        <div id='home-section'>
            <div className='container'>
                {/* <p style={{position: 'absolute', zIndex: 25}}>{`${window.innerWidth} -- ${window.innerHeight} -- ${width} -- ${3 * window.innerWidth + window.innerHeight} -- ${window.scrollY}`}</p> */}
                <Title/>
                <div className='camera' style={{transform: `translate3d(-${translate}px, 0 ,0)`}}>
                    <Section1 urlImage={homeData.image1}/>
                    <Section2 urlImage={homeData.image2}/>
                    <Section3 urlImage={{
                        image1: homeData.image1,
                        image2: homeData.image2,
                        image3: homeData.image3,
                        image4: homeData.image4
                    }}/>
                    <Section4/>
                </div>
            </div>
            <div style={{width: '100%', height:`${width}px`}}></div>
        </div>
    )
}

export default Home