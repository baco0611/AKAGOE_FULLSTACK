import { useEffect, useRef, useState } from 'react'
import './Section3.scss'
import clsx from 'clsx'

function Section3({ urlImage }) {

    const [sectionX, setSectionX] = useState(0)
    const sectionRef = useRef()
    const [active, setActive] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        if(sectionRef.current)
            setSectionX(sectionRef.current.getBoundingClientRect().x)
    })

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
            id='section-3'
            className={clsx('section-3', {
                'active': active
            })}
            style={{
                background: `
                    linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
                    url(${urlImage})`,
                opacity: 1 - (sectionX/(window.innerWidth*1.7))
            }}
        >
            <div className='section-3-main'>
                <div className='section-3-wrap'>
                    <div className='section-3-block'>
                        <h1>70+</h1>
                        <h3>employees and participants</h3>
                    </div>
                    <div className='section-3-block'>
                        <h1>3+</h1>
                        <h3>Office Branches</h3>
                    </div>
                    <div className='section-3-block'>
                        <h1>5+</h1>
                        <h3>Years Experience</h3>
                    </div>
                    <div className='section-3-block'>
                        <h1>50+</h1>
                        <h3>Official Partners</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3