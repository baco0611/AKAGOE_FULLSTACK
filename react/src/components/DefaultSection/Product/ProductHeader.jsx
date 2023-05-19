import { useEffect, useState } from 'react'
import './ProductHeader.scss'

function ProductHeader({ slug }) {

    const [content, setContent] = useState()

    useEffect(() => {
        if(slug) {
            // fetch API
            setContent('CONTENT Lorem ipsum dolor sit amet consectetur. Justo purus sed arcu cursus bibendum dui et proin orci. Dui adipiscing accumsan sed commodo placerat pretium sodales. Sit est eros at vitae lacus turpis amet. Viverra cursus cursus tempus in mollis vitae. Sodales fusce et etiam feugiat nunc ac proin quam consequat. Eu id pellentesque massa faucibus vitae fermentum vel elit leo. Pharetra vitae ullamcorper amet vitae. Ullamcorper non mattis arcu sagittis tellus non fermentum et quis. In condimentum orci amet eget sit sit elit sed.')        
        } else 
        {
            setContent('Lorem ipsum dolor sit amet consectetur. Justo purus sed arcu cursus bibendum dui et proin orci. Dui adipiscing accumsan sed commodo placerat pretium sodales. Sit est eros at vitae lacus turpis amet. Viverra cursus cursus tempus in mollis vitae. Sodales fusce et etiam feugiat nunc ac proin quam consequat. Eu id pellentesque massa faucibus vitae fermentum vel elit leo. Pharetra vitae ullamcorper amet vitae. Ullamcorper non mattis arcu sagittis tellus non fermentum et quis. In condimentum orci amet eget sit sit elit sed.')
        }
    }
    , [slug])

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
            
                <div className='header-title'>
                    <h1>02</h1>
                    <h2>PRODUCT</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader