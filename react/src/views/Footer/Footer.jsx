import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer({ theme }) {
    return (
        <footer 
            style={
                theme === 'default' && 
                {background: '#C7E5EC'} ||
                {background: '#F0D1E0'}
            }
        >
            <div className="footer-main">
                <div className="footer-left">
                    <div className="header">
                        <h1>KIS-GE</h1>
                        <p>Children's dream come true</p>
                </div>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h4>Information</h4>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/product'}>Product</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Shopping</h4>
                        <Link to={'/shop/category/beauty'}>Beauty</Link>
                        <Link to={'/shop/category/fashion'}>Fashion</Link>
                        <Link to={'/shop/category/stationary'}>Stationary</Link>
                    </div>
                    <div className="footer-column information">
                        <h4>Contact</h4>
                        <div>
                            <h5>KIS-GE Company</h5>
                            <p><b>Address:</b> 56-1 Tojiin Kitamachi, Kita Ward, Kyoto, 603-8577, Japan</p>
                            <p><b>Phone:</b> +81 75-813-8137</p>
                        </div>
                        <div>
                            <h5>Đại học Khoa Học Huế</h5>
                            <p><b>Address:</b> Dãy H Phòng H106 70 Nguyễn Huệ Thành Phố Huế Trường Đại Học Khoa Học</p>
                            <p><b>Phone:</b> +84 336027529 </p>
                        </div>
                    </div>
                </div>
            </div>
            <p>&copy; Akagoe team - Bao Huynh Van Nguyen - Nguyen Thi Van Anh</p>
        </footer>
    )
}

export default Footer