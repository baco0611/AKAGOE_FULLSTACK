import { useContext, useEffect, useState } from 'react'
import './Introduce.scss'
import axios from 'axios'
import { HomeSectionContext } from '../../../../../context/HomeProvider'
import Loader from '../../../../../views/Loader/Loader'

function Introduce({ slug }) {

    const [introduceData, setIntroduceData] = useState({name: '',content: ' ',mainColor: ''})
    const [isLoading, setIsLoading] = useState(true)
    const { setThemeColor } = useContext(HomeSectionContext)

    useEffect(() => {
        //fetch API
            const fecthAPI = async (api) => {
                await axios.get(api)
                    .then(response => {
                        const apiData = response.data
                        setIntroduceData(apiData.data)
                        setIsLoading(false)
                        setThemeColor('#00506c')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

            setIsLoading(true)
            const introduceApi = `http://localhost:3001/introduce-${slug}`
            fecthAPI(introduceApi)
    }, [slug])

    if(isLoading) 
        return <Loader/>

    return (
        <div id="introduce-section">
            <div className='introduce-left'>
                {/* <img src={Img[`${slug}Logo`]}/> */}
                <img src={introduceData.logo}/>
            </div>
            <div className='introduce-right'>
                <div>
                    <div className='introduce-title'>
                        <div className='introduce-line' style={{background: introduceData.mainColor}}></div>
                        <h3 style={{color: introduceData.mainColor || '#6BABAB'}}>About product</h3>
                    </div>

                    <h1>{introduceData.name}</h1>

                    <ul className='introduce-content'>
                        {
                            introduceData.content.split('/r/n').map((row, index) => {
                                return <li key={index}>{row}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Introduce