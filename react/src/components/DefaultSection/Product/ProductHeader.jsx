import './ProductHeader.scss'
import Loader from '../../../views/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useContext } from 'react'
import { UserContext } from '../../../context/ContextProvider'

function ProductHeader({ slug, about }) {

    const navigate = useNavigate()
    const { apiURL } = useContext(UserContext); 

    const fecthAPI = (slug) => {
        if(slug) {
            const titleApi = `${apiURL}/title/${slug}`
            return async () => {
                const result = await axios.get(titleApi) 
                    .then(response => {
                        const restData = response.data
                        return restData.data[0]
                    })
                    .catch(error => {
                        console.log(error)
                        navigate('/fectherror')
                    })

                return result
            }
        }
        else {
            const titleApi = `http://localhost:3001/title`
            return async () => {
                // const result = await axios.get(titleApi) 
                // .then(response => {
                //     const restData = response.data
                //     return restData.data
                // })
                // .catch(error => {
                //     console.log(error)
                //     navigate('/fectherror')
                // })

                // return result
                return "COMPANY Lorem ipsum dolor sit amet consectetur. Justo purus sed arcu cursus bibendum dui et proin orci. Dui adipiscing accumsan sed commodo placerat pretium sodales. Sit est eros at vitae lacus turpis amet. Viverra cursus cursus tempus in mollis vitae. Sodales fusce et etiam feugiat nunc ac proin quam consequat. Eu id pellentesque massa faucibus vitae fermentum vel elit leo. Pharetra vitae ullamcorper amet vitae. Ullamcorper non mattis arcu sagittis tellus non fermentum et quis. In condimentum orci amet eget sit sit elit sed."
            }
        }
    }

    const { data , isLoading, isError} = useQuery(`title-${slug}`, fecthAPI(slug),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

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

                {
                    slug 
                    &&
                        <p>{data.content}</p>
                    ||
                        <p>{data}</p>
                }
            
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