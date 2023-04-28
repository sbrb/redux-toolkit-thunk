import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem'
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">

                    <span className="cartCount"> Cart{items.length}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
