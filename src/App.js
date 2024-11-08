import React from 'react';
import Nav from './components/Nav';
import './globalStyle.scss';

import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

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
                    </Routes>
                </div>
            </Router>

            <Footer />
        </div>
    );
};

export default App;
