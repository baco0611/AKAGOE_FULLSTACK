import { useEffect, useRef, useState } from "react"
import './Section2.scss'
import clsx from "clsx"

function Section2({ urlImage}) {

    const [active, setActive] = useState(false)
    const sectionRef = useRef()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Set the scroll Y of web
    useEffect(() => {
        const handleSetActive = () => {
            if(sectionRef.current.getBoundingClientRect().x < windowWidth*0.65)
                setActive(true)
            else
                setActive(false)
        }

        window.addEventListener('scroll', handleSetActive)
        window.onresize = () => setWindowWidth(window.innerWidth)
 
        return () => {
            window.removeEventListener('scroll', handleSetActive)
        }
    }, [])

    return(
        <section 
            ref={sectionRef} 
            id='section-2' 
            className={clsx({
                'active': active
            })}
            style={{
                opacity: 1 - ((2*windowWidth - window.scrollY)/(windowWidth*2))
            }}
        >
            <img className="main-img" src={urlImage}/>
            <div className="section-menu"></div>
            <div className="section-2-main">
                <div className="section-2-content">
                    <div className=" section-2-mission">
                        <h3>KIS-GE connects Vietnam and Japan, trains quality human resources, and becomes a young leader promoting bilateral economic development.</h3>
                        <h1>MISSION</h1>
                    </div>
                </div>
                <div className="section-2-content">
                    <div className=" section-2-vision">
                        <h1>VISION</h1>
                        <h3>KIS-GE is a company that attracts 100 companies and corporations from Japan that intend to invest in Vietnam by 2030. With a short-term vision, within 10 years, it can train high-quality personnel in Vietnam.</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2