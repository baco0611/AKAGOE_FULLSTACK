import { useContext, useEffect, useRef, useState } from 'react'

import './Home.scss'
import { HomeSectionContext } from '../../../context/HomeProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../views/Loader/Loader';
import axios from 'axios';
import Section1 from './Section1';

function Home() {

    const [homeData, setHomeData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { setThemeColor } = useContext(HomeSectionContext)
    const [translate, setTranslate] = useState(0)
    const width = 2 * screen.width + screen.height
    // alert(width)

    console.log(translate, window.scrollY)

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
            if (window.scrollY <= width)
                setTranslate(window.scrollY)
            else
                setTranslate(width)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if (isLoading)
        return <Loader />

    return (
        <>
            <div id='home-section'>
                <div className='container'>
                    <div className='camera' style={{ transform: `translate3d(-${translate}px, 0 ,0)` }}>
                        <Section1 urlImage={homeData.image1} />
                        <Section1 urlImage={homeData.image1} />
                        <Section1 urlImage={homeData.image1} />
                    </div>
                </div>
                <div style={{ width: '100%', height: `${width}px` }}></div>
            </div>
        </>
    )
}

export default Home