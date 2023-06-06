import { useContext, useState } from 'react';
import './Search.scss'
import { UserContext } from '../../../context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query'
import axios from 'axios'
import clsx from 'clsx'
import Loader from '../../../views/Loader/Loader'
import ShopItem from '../ShopItem/ShopItem';

function Search() {

    const params = new URLSearchParams(window.location.search);
    const value = params.get('value');
    const page = params.get('page');
    let sortType = params.get('sortType')
    const [active, setActive] = useState(false)

    const { apiURL } = useContext(UserContext); 
    const navigate = useNavigate()

    const fecthAPI = (value, sortType) => {
        const searchApi = `http://localhost:3001/${value}-${sortType}`
        // const searchApi = `${apiURL}/introduce/${slug}`
        return async () => {
            const result = await axios.get(searchApi) 
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

    const axiosAPI = (value, sortType) => {
        const searchApi = `${apiURL}/find`

        const payloadData = new FormData()

        payloadData.append('category', value)
        payloadData.append('method', sortType)
        return async () => {
            const result = await axios.post(searchApi, payloadData) 
                .then(response => {
                    const restData = response.data
                    return restData.data
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                    navigate('/fectherror')
                })
            return result
        }
    }

    if(sortType === null || sortType === undefined)
        sortType = 'popular'

    // const { data , isLoading, isError} = useQuery(`search-${value}-${sortType}`, fecthAPI(value, sortType),{
    //     cacheTime: Infinity,
    //     refetchOnWindowFocus: false,
    // })

    const { data , isLoading, isError} = useQuery(`search-${value}-${sortType}`, axiosAPI(value, sortType),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    return (
        <div id='search-section'>
            <div className='search-header wraper'>
                <div className='search-title'>
                    <h1>{value}</h1>
                    {/* <i className='ti-line-double'></i>
                    <h2>{`${50} items`}</h2> */}
                </div>
                <div className='search-sort'>
                    <ul className={clsx({
                        active: active
                    })}>
                        {/* <li onClick={() => setActive(false)}><Link to={`/shop/search?value=${value}&sortType=new`}>New</Link></li> */}
                        <li onClick={() => setActive(false)}><Link to={`/shop/search?value=${value}&sortType=popular`}>Popular</Link></li>
                        <li onClick={() => setActive(false)}><Link to={`/shop/search?value=${value}&sortType=priceAsc`}>Price-Asc</Link></li>
                        <li onClick={() => setActive(false)}><Link to={`/shop/search?value=${value}&sortType=priceDesc`}>Price-Desc</Link></li>
                    </ul>
                    <button onClick={() => setActive(!active)}>
                        <i className='ti-filter' onClick={() => setActive(!active)}></i>
                        Filter
                    </button>
                </div>
            </div>
            <div className='search-main wraper'>
                {
                    data.map((data, index) => <ShopItem 
                        key={index}
                        name = {data.productName}
                        id = {data.id}
                        image = {data.image}
                        price = {data.price}
                        company = {data.company}
                        sale = {data.sale}
                    />)
                }
            </div>
        </div>
    )
}

export default Search