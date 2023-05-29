import { Link } from 'react-router-dom'
import './Section5.scss'

function Section5() {
    return (
        <section id='section-5' className='section-5'>
            <div className='section-menu'></div>
            <div className='section-5-main'>

                <div class="square">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>
                            about us
                        </h2>
                        <p>This is where you can better understand us and our working process.</p>
                        <Link to={'/about'}>CLICK ME!</Link>
                    </div>
                </div>
                <div class="square">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>
                            product
                        </h2>
                        <p>This is where you can see works made and released by our participants.</p>
                        <Link to={'/product'}>CLICK ME!</Link>
                    </div>
                </div>
                <div class="square">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>
                            shopping
                        </h2>
                        <p>This is where you can shop for our game and project related products.</p>
                        <Link to={'/shop'}>CLICK ME!</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5