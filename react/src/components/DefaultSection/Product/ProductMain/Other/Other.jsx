import Loader from '../../../../../views/Loader/Loader'
import './Other.scss'
import axios from 'axios'
import OtherItem from './OtherItem'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useContext } from 'react'
import { UserContext } from '../../../../../context/ContextProvider'

function Other({ slug, language}) {

    const { apiURL } = useContext(UserContext); 

    var navigate = useNavigate()

    const fecthAPI = (slug) => {
        const otherApi = `${apiURL}/other/${slug}`
        return async () => {
            const result = await axios.get(otherApi) 
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

    const { data , isLoading, isError} = useQuery(`other-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id="other-section">
            <div className="other wraper">
                <h1>Other</h1>
                <div className='other-main'>
                    {
                        data.map((data, index) => <OtherItem data={data} key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Other