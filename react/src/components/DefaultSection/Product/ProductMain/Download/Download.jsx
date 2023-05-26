import { useEffect, useState } from 'react'
import './Download.scss'
import * as Image from './img'
import axios from 'axios'
import Loader from '../../../../../views/Loader/Loader'
import { useNavigate } from 'react-router-dom'

function Download({ slug, language }) {

    const [downloadData, setDownloadData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        //fetch API
        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setDownloadData(apiData.data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 
        
        setIsLoading(true)
        const downloadApi = `http://localhost:3001/download-${slug}`
        fecthAPI(downloadApi)
    }, [slug])

    if(isLoading) 
        return <Loader/>

    return(
        <div id="download-section">
            <div className='download'>
                <div className='download-left'>
                    <h1>DOWNLOAD APP &<br/>GET THE VOUCHER!</h1>
                    <p>Get 30% off for first transaction using<br/>Rondovision mobile app for now.</p>
                    <div className='btn'>
                        <button className="download">
                            <a href="${download}" download={downloadData.appStoreURL}>
                                <img src={Image.appStoreBtn}/>
                            </a>
                        </button>
                        <button className="download">
                            <a href="${download}" download={downloadData.ggPlayURL}>
                                <img src={Image.ggPlayBtn}/>
                            </a>
                        </button>
                        <div>
                            <button className="download">
                                <a href="${download}" download={downloadData.laptopURL}>
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