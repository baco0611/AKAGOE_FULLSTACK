import { useParams } from "react-router"

function Cart() {

    const { slug } = useParams()

    console.log(slug)

    return (
        <div id="cart-section">
        </div>
    )
}

export default Cart