import React from 'react';
import { motion } from 'framer-motion';
import './BestSeller.scss';

function BestSeller() {
    const animationVariants = {
        hidden: { opacity: 0, x: -50 }, 
        visible: { opacity: 1, x: 0 },   
    };

    return (
        <div className="BestSeller">
            <div className="text">
                <h2 className="title">Best Sellers</h2>
                <p>Top sản phẩm bán chạy</p>
            </div>
            <div className="product-list">
                {[...Array(4)].map((_, index) => (
                    <motion.div
                        className="product-item"
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 0.7, delay: index * 0.2 }} 
                    >
                        <div className="product-item-img">
                            <img src="http://localhost:5000/static/media/moisturizer-serum-2.6c6c2936c3b0a64ca9cd.png" alt="Sản phẩm" />
                        </div>
                        <div className="product-item-info">
                            <div className="title">Phấn Nước Cho Lớp Nền Mịn Lì</div>
                            <div className="price">
                                <div className="discount">
                                    <div className="discount-rate">5% </div>
                                    <div className='discount-price'>997.500 ₫</div>
                                </div>
                                <div className="normal-price">997.500 ₫</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default BestSeller;