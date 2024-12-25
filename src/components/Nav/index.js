import React, { useRef } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Nav.scss';
import images from '~/assets/images';

const Nav = () => {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle('show-nav');
    };

    const closeMenu = () => {
        menu.current.classList.remove('show-nav');
    };

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <NavLink to="/">
                    <img src={images.logo} alt="Logo" />
                </NavLink>
            </div>
            <ul ref={menu}>
                <li>
                    <NavLink to="/" onClick={closeMenu}>Giới thiệu</NavLink>
                </li>
                <li>
                    <NavLink to="/product" onClick={closeMenu}>Sản phẩm</NavLink>
                </li>
            </ul>

            <div className="action">
                <div className="btn" onClick={menuHandler}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="pulseMe">
                        <span className="bar left"></span>
                        <span className="bar top"></span>
                        <span className="bar right"></span>
                        <span className="bar bottom"></span>
                    </span>
                </div>
            </div>
            <div className="contact">
                <span className="title">Liên hệ ngay</span>
                <span className="phone">0989.401.800</span>
            </div>
        </div>
    );
};

export default Nav;