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
import Section5 from './Section/Section5/Section5';
import { useQuery } from 'react-query';

function Home() {
    const navigate = useNavigate()
    const { setThemeColor } = useContext(HomeSectionContext)
    const [translate, setTranslate] = useState(0)
    const width = 4 * window.innerWidth + window.innerHeight 
    
    // const fecthAPI = (api) => {
    //     return async () => {
    //         const response = await axios.get(api)
    //         return response.data.data
    //     }
    // }
    
    // const homeApi = 'http://localhost:3001/home-image'
    // const { data, isLoading, error } = useQuery('myData', fecthAPI(homeApi), {
    //     cacheTime: Infinity,
    //     refetchOnWindowFocus: false,
    // })
    setThemeColor('default')

    useEffect(() => {
        const handleScroll = () => {
                setTranslate(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // if(isLoading) 
    //     return <Loader/>
    
    // if(error)
    //     navigate('/fetcherror/broken')

    return (
        <div id='home-section'>
            <div className='container'>
                {/* <p style={{position: 'absolute', zIndex: 25}}>{`${window.innerWidth} -- ${window.innerHeight} -- ${width} -- ${3 * window.innerWidth + window.innerHeight} -- ${window.scrollY}`}</p> */}
                <Title/>
                <div className='camera' style={{transform: `translate3d(-${translate}px, 0 ,0)`}}>
                    <Section1/>
                    <Section3/>
                    <Section2/>
                    <Section4/>
                    <Section5/>
                </div>
            </div>
            <div style={{width: '100%', height:`${width}px`}}></div>
        </div>
    )
}

export default Home