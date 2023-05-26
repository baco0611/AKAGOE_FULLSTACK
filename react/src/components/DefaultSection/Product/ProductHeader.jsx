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
        
        if(slug) {
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
            var productApi = `http://localhost:3001/title-${slug}`
            fecthAPI(productApi)
        } else {
            setContent('COMPANY Lorem ipsum dolor sit amet consectetur. Justo purus sed arcu cursus bibendum dui et proin orci. Dui adipiscing accumsan sed commodo placerat pretium sodales. Sit est eros at vitae lacus turpis amet. Viverra cursus cursus tempus in mollis vitae. Sodales fusce et etiam feugiat nunc ac proin quam consequat. Eu id pellentesque massa faucibus vitae fermentum vel elit leo. Pharetra vitae ullamcorper amet vitae. Ullamcorper non mattis arcu sagittis tellus non fermentum et quis. In condimentum orci amet eget sit sit elit sed.')
            setIsLoading(false)
        }
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