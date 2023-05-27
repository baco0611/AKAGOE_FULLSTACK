import { memo, useEffect, useState } from "react"

function Section1({ urlImage }) {

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
                background: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
                    url(${urlImage})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: (window.innerWidth-distance)/window.innerWidth*1.8
            }}
        >
        </section>
    )
}

export default memo(Section1)