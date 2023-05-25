import { useEffect, useState } from 'react'
// import { navigate } from 'react-router-dom'
import Loader from '../../../../../views/Loader/Loader'
import './Other.scss'
import axios from 'axios'
import OtherItem from './OtherItem'
import { useNavigate } from 'react-router-dom'

function Other({ slug, language }) {

    const [otherData, setOtherData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    var navigate = useNavigate()

    useEffect(() => {
        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setOtherData(apiData.data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 
        
        setIsLoading(true)
        const reviewApi = `http://localhost:3001/other-${slug}`
        fecthAPI(reviewApi)
    }, [slug])

    if(isLoading)
        return <Loader/>

    return (
        <div id="other-section">
            <div className="other wraper">
                <h1>Other</h1>
                <div className='other-main'>
                    {
                        otherData.map((data, index) => <OtherItem data={data} key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Other