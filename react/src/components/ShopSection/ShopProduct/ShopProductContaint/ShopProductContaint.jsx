import clsx from "clsx"
import { useContext, useEffect, useRef, useState } from "react"
import { ShopSectionContext } from "../../../../context/ShopProvider"
// import ReactImageMagnify from 'react-image-magnify'

const ShopProductContaint = ({ data }) => {
    const titleRef = useRef()
    const imageAreaRef = useRef()
    const [translate, setTranslate] = useState(0)
    const [height, setHeight] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const formartDescription = data.description.replace(/(\r\n|\n|\r)/g, "<br/><br/>")
    const [quantity, setQuantity] = useState(0)
    const { setNumberOfCart } = useContext(ShopSectionContext)
    const imageRef = useRef(null)
    const magnifyRef = useRef(null);

    const handleResize = () => {
        if(titleRef.current != undefined)
            setTranslate(-titleRef.current.offsetHeight - 15)

        if(imageAreaRef.current != undefined) {
            setHeight(imageAreaRef.current.offsetHeight - titleRef.current.offsetHeight)
        }
    };

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        if(imageRef && magnifyRef) {

            const handleMouseMove = (e) => {
                var clientX = e.clientX - magnifyRef.current.offsetLeft
                var clientY = e.clientY - magnifyRef.current.offsetTop

                var mWidth = imageRef.current.offsetWidth
                var mHeight = imageRef.current.offsetHeight

                clientX = clientX / mWidth * 100
                clientY = clientY / mHeight * 100

                imageRef.current.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`
            }

            const handleMouseLeave = () => {
                imageRef.current.style.transform = `translate(-50%, -50%) scale(1)`
            }

            magnifyRef.current.addEventListener("mousemove", handleMouseMove)
            magnifyRef.current.addEventListener("mouseleave", handleMouseLeave)
        }
    })

    const handleMouseEnter = (e) => {
        const value = e.target.getAttribute('data-index');
        setCurrentIndex(value)
    };

    const handleChangeQuantity = e => {
        const regex = /^[0-9]+$/

        if(regex.test(e.target.value))
        {
            var value = parseInt(e.target.value)
            if(value <= data.itemLeft)
                setQuantity(value)
            else
                setQuantity(data.itemLeft)
        } else
            setQuantity(0)
    }

    const handleAdd = () => {
        if(quantity < data.itemLeft)
            setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 0)
            setQuantity(quantity - 1)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setNumberOfCart(prev => prev + quantity)
    }

    return (
        <div
            className="shop-product-containt wraper"
            style={{
                transform: `translateY(${translate}px)`
            }}
        >
            <div ref={imageAreaRef} className="shop-product-img">
                <div ref={magnifyRef} className="magnify">
                    <img ref={imageRef} src={data.image[currentIndex]}/>
                </div>
                <div className="image-nav">
                    {
                        data.image.map((item, index) => {
                            return <img 
                                key={index}
                                data-index={index}
                                src={item}
                                className={index == currentIndex ? 'active' : ''}
                                onMouseEnter={handleMouseEnter}
                            />
                        })
                    }
                </div>
            </div>
            <div className="shop-product-content">
                <div ref={titleRef} className="content-title">
                    <h1>{data.productName}</h1>
                    <h3>{data.company}</h3>
                    <h2>{`$ ${data.price}`}</h2>                            
                </div>
                <div 
                    className="content-main"
                    style={{
                        height: `${height}px`
                    }}
                >
                    <div className="content">
                        <h2>Details Product</h2>
                        <p dangerouslySetInnerHTML={{ __html: formartDescription }}></p>
                    </div>
                    <div className="sale">
                        <div className="quantity">
                            <span>Quantity</span>
                            <div className="quantity-main">
                                <button onClick={handleMinus}>-</button>
                                <input 
                                    value={quantity}
                                    onChange={handleChangeQuantity}
                                />
                                <button onClick={handleAdd}>+</button>
                            </div>
                            <span>{`${data.itemLeft} items left`}</span>
                        </div>
                        <div className="total">
                            <span>Total</span>
                            <h2>{`$${data.price * quantity}`}</h2>
                        </div>
                        <button 
                            type="submit" 
                            className={clsx("submit-btn", {
                                "active": quantity > 0
                            })}
                            onClick={handleSubmit}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopProductContaint