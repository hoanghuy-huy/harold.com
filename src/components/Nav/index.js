import React, { useRef } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Nav.scss';
import images from '~/assets/images';
import SelectedComp from './SelectedComp';
import { useLanguage } from '~/Hooks/Context/LanguageProvider';

const translations = {
    en: {
        intro: 'Introduction',
        products: 'Products',
        contact: 'Contact',
    },
    vi: {
        intro: 'Giới thiệu',
        products: 'Sản phẩm',
        contact: 'Liên Hệ',
    },
    ko: {
        intro: '소개',
        products: '제품',
        contact: '연락처',
    },
};

const Nav = () => {
    const menu = useRef();
    const { language } = useLanguage();
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
                    <NavLink to="/gioi-thieu" onClick={closeMenu}>
                        {translations[language].intro} {/* Hiển thị bản dịch */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/san-pham" onClick={closeMenu}>
                        {translations[language].products}{' '}
                        {/* Hiển thị bản dịch */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lien-he" onClick={closeMenu}>
                        {translations[language].contact}{' '}
                        {/* Hiển thị bản dịch */}
                    </NavLink>
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
                <div className="header-right">
                    <div className="btn-language">
                        <SelectedComp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
