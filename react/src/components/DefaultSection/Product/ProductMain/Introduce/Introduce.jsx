import './Introduce.scss'
import axios from 'axios'
import Loader from '../../../../../views/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useContext } from 'react'
import { UserContext } from '../../../../../context/ContextProvider'

function Introduce({ slug, language}) {

    const { apiURL } = useContext(UserContext); 
    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const introduceApi = `${apiURL}/introduce/${slug}`
        return async () => {
            const result = await axios.get(introduceApi) 
                .then(response => {
                    const restData = response.data
                    // return restData.data
                    return restData.data[0]
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })
            return result
        }
    }

    const { data , isLoading, isError} = useQuery(`introduce-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id="introduce-section">
            <div className='introduce-left'>
                {/* <img src={Img[`${slug}Logo`]}/> */}
                <img src={data.logo}/>
            </div>
            <div className='introduce-right'>
                <div>
                    <div className='introduce-title'>
                        <div className='introduce-line' style={{background: data.mainColor}}></div>
                        <h3 style={{color: data.mainColor || '#6BABAB'}}>About product</h3>
                    </div>

                    <h1>{data.name}</h1>

                    <ul className='introduce-content'>
                        {
                            data.content.split('/r/n').map((row, index) => {
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