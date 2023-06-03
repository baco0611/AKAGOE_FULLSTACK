import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Item from '../Item/Item'
import {UserContext} from '../../../../context/ContextProvider'
import Loader from '../../../../views/Loader/Loader'
import './BestSeller.scss'

function BestSeller() {

    const { apiURL } = useContext(UserContext); 
    const navigate = useNavigate()

    const fecthAPI = () => {
        // const introduceApi = `${apiURL}/introduce/${slug}`
        const bestSellerApi = `http://localhost:3001/best-seller`
        return async () => {
            const result = await axios.get(bestSellerApi) 
                .then(response => {
                    const restData = response.data
                    // return restData.data
                    return restData.data
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })
            return result
        }
    }

    const { data , isLoading, isError} = useQuery(`best-seller`, fecthAPI(),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    console.log(data)

    return (
        <section className='wraper shop-best-seller'>
            <div className='introduce'>
                <h1>Best Selling <br/>Products</h1>
                <p>Easiest way to healthy life by buying your favorite product</p>
            </div>
            <div className='item-list'>
                {
                    data.map((data, index) => {
                        return <Item 
                                    key={index}
                                    name = {data.productName} 
                                    price = {data.price}
                                    company = {data.company} 
                                    imageUrl = {data.image}
                                />
                    })
                }
            </div>
        </section>
    )
}

export default BestSeller