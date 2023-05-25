import { useEffect, useState } from 'react'
import './ProductHeader.scss'
import Loader from '../../../views/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ProductHeader({ slug, about }) {

    const [content, setContent] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        var productApi = ""
        
        if(slug) {
            productApi = `http://localhost:3001/title-${slug}`
        } else {
            productApi = 'http://localhost:3001/title-company'
        }

        const fecthAPI = async (api) => {  
            await axios.get(api)
                .then(response => {
                    const apiData = response.data
                    setContent(apiData.data.content)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fetcherror')
                })
        } 
        setIsLoading(true)
        fecthAPI(productApi)
    }
    , [slug])

    if(isLoading)
        return <Loader/>

    return (
        <div className="product-header">
            <div className='header-containt wraper'>
                <div className='header-name'>
                    {
                        slug &&
                        <h1 style={{
                            color: 'white',
                            textTransform: 'uppercase',
                            fontSize: '75px',
                            letterSpacing: '5px'
                        }}>{slug}</h1> ||
                        (
                            <>
                                <h1>NO.1 COMPANY</h1>
                                <h2>IN GAME INDUSTRY</h2>
                            </>
                        )

                    }
                </div>

                <p>{content}</p>
            
                {
                    about 
                    &&
                        <div className='header-title'>
                            <h1>01</h1>
                            <h2>ABOUT US</h2>
                        </div>
                    ||
                        <div className='header-title'>
                            <h1>02</h1>
                            <h2>PRODUCT</h2>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductHeader