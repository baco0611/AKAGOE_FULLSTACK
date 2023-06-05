import { useContext } from "react";
import { UserContext } from "../../../../context/ContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../views/Loader/Loader";
import { useQuery } from "react-query";
import ShopItem from "../../ShopItem/ShopItem";

function ShopRecommend({ id }) {
    const { apiURL } = useContext(UserContext); 
    const navigate = useNavigate()

    const fecthAPI = (id) => {
        const recommendApi = `http://localhost:3001/otherData-${id}`
        // const searchApi = `${apiURL}/introduce/${slug}`
        return async () => {
            const result = await axios.get(recommendApi) 
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

    const { data , isLoading, isError} = useQuery(`recommend-${id}`, fecthAPI(id),{
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    if(isLoading)
        return <Loader/>

    if(isError)
        navigate('/fectherror')

    console.log(data)

    return (
        <div className="shop-recommend wraper">
            <h2>YOU MAY ALSO LIKE</h2>
            <div className="shop-recommend-main">
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

export default ShopRecommend