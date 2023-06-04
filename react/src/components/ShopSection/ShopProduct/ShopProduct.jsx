import { useParams } from "react-router-dom"

function ShopProduct() {

    const { id } = useParams()

    console.log(id)

    return(
        <div id="shop-product-section">
            <div className="shop-product-main" style={{
                width: "100%",
                height: "80vh"
            }}>
                <div className="wraper">
                    <img width={'250px'} src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559"/>
                </div>
            </div>
        </div>
    )
}

export default ShopProduct