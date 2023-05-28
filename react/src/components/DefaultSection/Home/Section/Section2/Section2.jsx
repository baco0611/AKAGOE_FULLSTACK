import { useEffect, useState } from "react"
import './Section2.scss'

function Section2({ urlImage}) {

    const [distance, setDistance] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Set the scroll Y of web
    useEffect(() => {
        const handleChangDistance = () => {
            setDistance(window.scrollY)
        }

        window.addEventListener('scroll', handleChangDistance)

        window.onresize = () => setWindowWidth(window.innerWidth)
 
        return () => {
            window.removeEventListener('scroll', handleChangDistance)
        }
    }, [])

    return(
        <section id="section-2" style={{
            opacity: 1 - (windowWidth-distance)/windowWidth
        }}>
            {
                distance-windowWidth>-(windowWidth/2.75)
                ?
                    <img className="main-img active-img" src={urlImage}/>
                :
                    <img className="main-img" src={urlImage}/>
                
            }
            <div className="section-2-menu"></div>
            <div className="section-2-main">
                <div className="section-2-content">
                    {
                        distance-windowWidth>-(windowWidth/2.75)
                        ?
                        <div className=" section-2-mission active-mission">
                            <h3>KIS-GE connects Vietnam and Japan, trains quality human resources, and becomes a young leader promoting bilateral economic development.</h3>
                            <h1>MISSION</h1>
                        </div>
                        :
                        <div className=" section-2-mission">
                            <h3>KIS-GE connects Vietnam and Japan, trains quality human resources, and becomes a young leader promoting bilateral economic development.</h3>
                            <h1>MISSION</h1>
                        </div>
                    }
                </div>
                <div className="section-2-content">
                    {
                        distance-windowWidth>-(windowWidth/2.75)
                        ?
                        <div className=" section-2-vision active-vision">
                            <h1>VISION</h1>
                            <h3>KIS-GE is a company that attracts 100 companies and corporations from Japan that intend to invest in Vietnam by 2030. With a short-term vision, within 10 years, it can train high-quality personnel in Vietnam.</h3>
                        </div>
                        :
                        <div className=" section-2-vision">
                            <h1>VISION</h1>
                            <h3>KIS-GE is a company that attracts 100 companies and corporations from Japan that intend to invest in Vietnam by 2030. With a short-term vision, within 10 years, it can train high-quality personnel in Vietnam.</h3>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Section2