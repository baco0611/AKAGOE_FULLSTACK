import './Download.scss'
import * as Image from './img'
import axios from 'axios'
import Loader from '../../../../../views/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

function Download({ slug, language }) {

    const navigate = useNavigate()

    const fecthAPI = (slug) => {
        const downloadApi = `http://localhost:3001/download-${slug}`
        return async () => {
            const result = await axios.get(downloadApi) 
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

    const { data , isLoading, isError} = useQuery(`download-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return(
        <div id="download-section">
            <div className='download'>
                <div className='download-left'>
                    <h1>DOWNLOAD APP &<br/>GET THE VOUCHER!</h1>
                    <p>Get 30% off for first transaction using<br/>Rondovision mobile app for now.</p>
                    <div className='btn'>
                        <button className="download">
                            <a href="${download}" download={data.appStoreURL}>
                                <img src={Image.appStoreBtn}/>
                            </a>
                        </button>
                        <button className="download">
                            <a href="${download}" download={data.ggPlayURL}>
                                <img src={Image.ggPlayBtn}/>
                            </a>
                        </button>
                        <div>
                            <button className="download">
                                <a href="${download}" download={data.laptopURL}>
                                    <img src={Image.computerBtn}/>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='download-right'>
                    <img src={Image.downloadImg}/>
                </div>
            </div>
        </div>
    )
}

export default Download