import 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <div className='nav-item'>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Order Review</a>
            <a href="#">Login</a>   
            </div>
        </div>
    );
};

export default Header;