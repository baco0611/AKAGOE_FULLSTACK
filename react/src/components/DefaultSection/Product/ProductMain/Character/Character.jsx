import './Character.scss'
import Loader from '../../../../../views/Loader/Loader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

function Character({ slug, language }) {

    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const characterApi = `http://localhost:3001/character-${slug}`
        return async () => {
            const result = await axios.get(characterApi) 
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

    const { data , isLoading, isError} = useQuery(`character-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id='character-section'>
            <div className='character wraper'>
                <div className='character-content'>
                    <div className='heading'>
                        <h3>Introduce</h3>
                        <h1>CHARACTER</h1>
                    </div>
                    <p>{data.content}</p>
                </div>
                <div className='character-img'>
                    {
                        data.type === '3D' 
                        ?
                            <>
                                <model-viewer src={data.image} camera-controls auto-rotate ar></model-viewer>
                                <p>Dùng chuột kéo thả để xem và con lăn để zoom</p>  
                            </>
                        :
                            <img src={data.image}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Character