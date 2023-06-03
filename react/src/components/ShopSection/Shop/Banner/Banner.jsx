import { useContext, useRef } from 'react'
import './Banner.scss'
import { ShopSectionContext } from '../../../../context/ShopProvider'

function Banner() {
    const { searchValue, setSearchValue, searchProduct } = useContext(ShopSectionContext)
    const searchRef = useRef()

    return (
        <section className='wraper shop-banner'>
            <h1>LET'S<br/>EXPLORE<br/>UNIQUE<br/>PRODUCT</h1>
            <img></img>
            <div className='rectangle-1'></div>
            <div className='rectangle-2'></div>
            <div className='rectangle-3'></div>
            <div className='search-bar'>
                <div className='search-main'>
                    <input 
                        ref={searchRef}
                        name='search-bar' 
                        placeholder='What are you looking for ...' 
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <i 
                        className='ti-search'
                        onClick={() => searchProduct(searchRef.current.value)}
                    ></i>
                </div>
            </div>
        </section>
    )
}

export default Banner