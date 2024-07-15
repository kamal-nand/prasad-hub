// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import bgimg from '../../assets/bg.jpg';

const Navbar = () => {
    return (
        <div className="home-page">
            <div className='navbar'>
                <img className='logo' src="" alt="" />
                <h3>PRASAD-HUB</h3>
                <ul>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>About Us</li>
                </ul>
                <div className="admin-login">
                    <button>
                        <span>Login</span>
                    </button>
                </div>
            </div>
            <div className='body'>
                <img src={bgimg} alt="" ></img>
                <Link to="/donate" className='go-to-form'>Donate Here →</Link>
            </div>
            <div className="body-bottom">
                <div>
                    ejsdnf
                </div>
            </div>
            <div className="footer">
                <footer>
                    <span>Copyright &copy; All rights reserved</span>
                </footer>
            </div>
        </div>
    );
};

export default Navbar;
