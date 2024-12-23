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
    return (
        <div className="App">
            <Router>
                <Nav />
                <div className="App">
                    <Routes>
                        <Route exact={true} path={'/'} element={<HomePage />} />
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
                        <Route
                            exact={true}
                            path={'/brand-story'}
                            element={<CompanyIntroductionPage />}
                        />
                    </Routes>
                    <div className="contact-fixed">
                        <ul>
                            <li>
                                <img
                                    src="https://unila.com.vn/wp-content/uploads/2024/06/mess.png"
                                    alt=""
                                />
                            </li>

                            <li>
                                <img
                                    src="https://unila.com.vn/wp-content/uploads/2024/06/mess.png"
                                    alt=""
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
