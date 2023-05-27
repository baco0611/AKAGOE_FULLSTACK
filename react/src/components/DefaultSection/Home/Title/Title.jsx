import { useEffect, useState } from 'react'
import './Title.scss'

function Title() {
    const [distance, setDistance] = useState(0)

    useEffect(() => {
        const handleChangDistance = () => {
            setDistance(window.scrollY)
        }

        window.addEventListener('scroll', handleChangDistance)

        return () => {
            window.removeEventListener('scroll', handleChangDistance)
        }
    }, [])

    return (
        <div className="title-home" >
            <h1 
                className='item-1'
                style={{
                    transform: `translate(-${2*distance}px, 0)`
                }}
            >   
                KIS-GE
            </h1>
            <h1 
                className='item-2'
                style={{
                    transform: `translate(0, ${1.1*distance}px) rotate(-90deg)`
                }}
            >
                KIS
            </h1>
            <h1 
                className='item-3'
                style={{
                    transform: distance!=0 ? `translate(-${1.1*distance}px, -${1.1*distance}px) rotate(45deg)`:''
                }}
            >
                GE
            </h1>
            <h3 
                className='item-4'
                style={{
                    transform: `translate(${0.9*distance}px, 0)`
                }}
            >
                PRODUCT - SHOPING
            </h3>
            <h3 
                className='item-5'
                style={{
                    transform: distance!=0 ? `translate(${1.1*distance}px, -${1.1*distance}px) rotate(-45deg)`:''
                }}
            >
                JAPAN
            </h3>
        </div>
    )
}

export default Title