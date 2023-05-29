import { useEffect, useRef, useState } from 'react'
import './Section4.scss'
import clsx from 'clsx'
import kondoImg from './img/kondo_hidemasa.png'

function Section4() {

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

    return (
        <section 
            ref={sectionRef} 
            id='section-4' 
            className={clsx('section-4', {
                'active': active
            })}
        >
            <div className='section-menu'></div>
            <div className='section-4-main'>
                <div className='section-4-img'>
                    <img src={kondoImg}/>
                    <div className='section-4-text'>
                        <h2>KONDO HIDEMASA</h2>
                        <h1>近藤秀将</h1>
                        <h2>KONDO HIDEMASA</h2>
                        <h1>近藤秀将</h1>
                        <h2>KONDO HIDEMASA</h2>
                        <h1>近藤秀将</h1>
                    </div>
                </div>
                <div className='section-4-content'>
                    <p>I am Hidemasa Kondo, appointed as a visiting professor at the University of Science, Hue University, Vietnamese public school system. "Thesis on career design abroad" founded by me aims to help Vietnamese students get a "recognized career" in Japan in general and abroad in particular. This means being someone businesses and society want you to be. This is not something as simple as "If you study seriously, you will be recognized. In the beginning "Study" and "Use" are two completely different things. Not exactly if "Study" is okay. meaning can be "Used" but needs a connecting perspective from both sides. The primary goal of this course is to achieve this common point of view. This is not knowledge to be memorized but is a flexible mindset that can be used in many different situations. Definitely, join me in achieving a "Recognized Career" in Japan, Vietnam and the whole of Asia.</p>
                    <p>.近藤秀将</p>
                </div>
            </div>
        </section>
    )
}

export default Section4