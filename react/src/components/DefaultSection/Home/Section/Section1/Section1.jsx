import { memo, useEffect, useState } from "react"
import './Section1.scss'

function Section1() {

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
        <section 
            id='section-1'
            style={{
                opacity: (window.innerWidth-distance)/window.innerWidth*1.8
            }}
        >
        </section>
    )
}

export default memo(Section1)