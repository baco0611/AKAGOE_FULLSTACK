function Section1({ urlImage }) {

    return (
        <section 
            id='section1'
            style={{
                background: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
                    url(${urlImage})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
                    <p>{`${screen.width}--${screen.height}`}</p>

            <h1 className='item-1 wow bounceInRight' data-wow-delay="0.5s" data-wow-duration="2s">KIS-GE</h1>
            <h1 className='item-2'>KIS</h1>
            <h1 className='item-3'>GE</h1>
            <h3 className='item-4'>PRODUCT - SHOPING</h3>
            <h3 className='item-5'>JAPAN</h3>
        </section>
    )
}

export default Section1