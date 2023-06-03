import { createContext, useEffect, useState } from "react";

const ShopSectionContext = createContext({
    numberOfCart: 0,
    setNumberOfCart: () => {},
    searchValue: '',
    setSearchValue: () => {},
    searchProduct: () => {}
})

function ShopContext({children}) {
    const [numberOfCart, setNumberOfCart] = useState(0);
    const [searchValue, setSearchValue] = useState('')
    
    const searchProduct = (request) => {
        console.log(request)
        setSearchValue('')
    }

    // Fetch API ở đây để lấy ở csdl nếu cần nè
    useEffect(() => {})

    return (
        <ShopSectionContext.Provider value={{
            numberOfCart,
            setNumberOfCart,
            searchValue,
            setSearchValue,
            searchProduct
        }}>
            {children}
        </ShopSectionContext.Provider>
    )
}

export default ShopContext
export { ShopSectionContext }