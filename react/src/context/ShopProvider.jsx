import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopSectionContext = createContext({
    numberOfCart: 0,
    setNumberOfCart: () => {},
    searchValue: '',
    setSearchValue: () => {},
    searchProduct: () => {},
    handleEnterAction: () => {}
})

function ShopContext({children}) {
    const [numberOfCart, setNumberOfCart] = useState(0);
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    
    const searchProduct = (request) => {
        if(request !== '')
        {
            navigate(`/shop/search?value=${request}`);
            setSearchValue('')
        }
    }

    const handleEnterAction = (e) => {
        if(e.key === "Enter")
            searchProduct(e.target.value)
    }

    // Fetch API ở đây để lấy ở csdl nếu cần nè
    useEffect(() => {})

    return (
        <ShopSectionContext.Provider value={{
            numberOfCart,
            setNumberOfCart,
            searchValue,
            setSearchValue,
            searchProduct,
            handleEnterAction
        }}>
            {children}
        </ShopSectionContext.Provider>
    )
}

export default ShopContext
export { ShopSectionContext }