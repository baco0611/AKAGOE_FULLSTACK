import { Link } from 'react-router-dom'

function otherItem({ data }) {
    return (
        <div className="other-item">
            <img src={data.image}/>

            <div className="other-content">
                <Link>
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