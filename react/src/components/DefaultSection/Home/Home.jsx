import { useEffect, useRef, useState } from 'react'
import skrollr from 'skrollr';

import './Home.scss'

function Home() {

    const testRef = useRef()
    const [style, setStyle] = useState({})
    const [windowY, setWindowY] = useState(0)

    window.onscroll = () => {
        console.log(testRef.current.getBoundingClientRect())
        const elementRect = testRef.current.getBoundingClientRect()
        // console.log(testRef.current.scrollWidth)
        console.log(window.scrollY)
        console.log(windowY, elementRect.y)
        // console.log(document.documentElement.offsetTop)

        if(elementRect.y <= 0 && elementRect.y >= 0) {
            setWindowY(window.scrollY)
        } else setWindowY(0)

        if(elementRect.y <= 0 && elementRect.y >= -elementRect.height) {
            window.onscroll = () => window.scroll(0,0)
            setStyle({
                transform: `translate(-541.611px, 0)`
            })
        } else setStyle({})
    }

    // window.onscroll = () => window.scroll(0,0)
    return (
        <div id='home-section'>
            <article className='frame' style={{background: 'brown'}}></article>
            <article className='frame' style={{background: 'gray'}}></article>
            <article className='frame' style={{background: 'pink'}}></article>
            <div className='box'>
                <div className='test' ref={testRef} style={style}>
                    <article className='frame' style={{background: 'white'}}></article>
                    <article className='frame' style={{background: 'blue'}}></article>
                    <article className='frame' style={{background: 'red'}}></article>
                    <article className='frame' style={{background: 'yellow'}}></article>
                </div>
            </div>
            <article className='frame' style={{background: 'brown'}}></article>
            <article className='frame' style={{background: 'gray'}}></article>
            <article className='frame' style={{background: 'pink'}}></article>
        </div>
    )
}

export default Home