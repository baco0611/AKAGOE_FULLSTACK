import { useEffect, useState } from "react"

function Section2({ urlImage}) {

    const [distance, setDistance] = useState(0)

    // Set the scroll Y of web
    useEffect(() => {
        const handleChangDistance = () => {
            setDistance(window.scrollY)
        }

        window.addEventListener('scroll', handleChangDistance)

        return () => {
            window.removeEventListener('scroll', handleChangDistance)
        }
    }, [])

    return(
        <section id="section-2">
            <img className="main-img" src={urlImage}/>

        </section>
    )
}

export default Section2