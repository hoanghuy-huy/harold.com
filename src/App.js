import React from 'react';
import Nav from './components/Nav';
import './globalStyle.scss';

import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import DetailProductPage from './pages/DetailProductPage';
import CompanyIntroductionPage from './pages/CompanyIntroductionPage';

const App = () => {
    const handleClick = () => {
        window.open('https://m.me/huynh.hoang.huy.752747/', '_blank');
    };
    return (
        <div className="App">
            <Router>
                <Nav />
                <div className="App">
                    <Routes>
                        <Route
                            exact={true}
                            path={'/'}
                            element={<CompanyIntroductionPage />}
                        />
                        <Route
                            exact={true}
                            path={'/product'}
                            element={<ProductPage />}
                        />
                        <Route
                            exact={true}
                            path={'/product/:productId'}
                            element={<DetailProductPage />}
                        />
                    </Routes>
                    <div className="contact-fixed">
                        <ul>
                            <li
                                onClick={handleClick}
                                className="contact-button"
                            >
                                <img
                                    src="https://unila.com.vn/wp-content/uploads/2024/06/mess.png"
                                    alt="messenger-icon"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </Router>

            <Footer />
        </div>
    );
};

export default App;
