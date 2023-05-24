function ReviewBlock({ data }) {
    return (
        <div className="review-block">
            <p>{data.content}</p>
            <div className="review-footer">
                <div className="review-img">
                    <img src={data.image}/>
                </div>
                <div className="review-title">
                    <div className="review-left">
                        <h1>{data.name}</h1>
                        <h3>{data.position}</h3>
                    </div>
                    <div className="review-right">
                        <i className="ti-star"></i>
                        <h1>{data.star}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewBlock