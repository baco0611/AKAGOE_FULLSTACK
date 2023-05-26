import { Link } from 'react-router-dom'

function otherItem({ data }) {
    return (
        <div className="other-item">
            <Link to={`/product/${data.slug}`}>
                <img src={data.image}/>
            </Link>

            <div className="other-content">
                <Link to={`/product/${data.slug}`}>
                    <h1>{data.name}</h1>
                </Link>
                <Link to={`/product/${data.slug}`}>
                    <span>{`Explore Now!`}</span>
                    <i className='ti-arrow-right'></i>
                </Link>
            </div>
        </div>
    )
}

export default otherItem