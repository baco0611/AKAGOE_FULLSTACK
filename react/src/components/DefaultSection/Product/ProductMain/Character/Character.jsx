import { useEffect, useState } from 'react'
import './Character.scss'
import Loader from '../../../../../views/Loader/Loader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Character({ slug, language }) {

    const [characterData, setCharacterData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setCharacterData(apiData.data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 
        
        // console.log(slug)
        const characterApi = `http://localhost:3001/character-${slug}`
        fecthAPI(characterApi)
    }, [slug])

    if(isLoading)
        return <Loader/>

    return (
        <div id='character-section'>
            <div className='character wraper'>
                <div className='character-content'>
                    <div className='heading'>
                        <h3>Introduce</h3>
                        <h1>CHARACTER</h1>
                    </div>
                    <p>{characterData.content}</p>
                </div>
                <div className='character-img'>
                    {
                        characterData.type === '3D' 
                        ?
                            <>
                                <model-viewer src={characterData.image} camera-controls auto-rotate ar></model-viewer>
                                <p>Dùng chuột kéo thả để xem và con lăn để zoom</p>  
                            </>
                        :
                            <img src={characterData.image}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Character