import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BannerSlider.scss';
const BannerSlider = () => {
    const contents = [
        {
            title: 'GIẢI PHÁP ĐỘC BẢN',
            subtitle: 'PRODUCT INSIGHT',
            description:
                'Là quá trình nghiên cứu tạo ra sản phẩm mang tính chiến lược độc bản, giúp khách hàng có tầm nhìn sâu sắc về sản phẩm.',
            image: 'https://unila.com.vn/wp-content/uploads/2024/10/GIA-CONG-MY-PHAM-UNILA-PRODUCT-INSIGHT-01.jpg',
        },
        {
            title: 'GIẢI PHÁP MỚI',
            subtitle: 'NEW SOLUTION',
            description:
                'Giải pháp mới giúp cải thiện quy trình làm việc và tăng hiệu quả sản xuất.',
            image: 'https://unila.com.vn/wp-content/uploads/2024/10/GIA-CONG-MY-PHAM-UNILA-PRODUCT-INSIGHT-01.jpg',
        },
        {
            title: 'CÔNG NGHỆ TIÊN TIẾN',
            subtitle: 'ADVANCED TECHNOLOGY',
            description:
                'Ứng dụng công nghệ tiên tiến trong sản xuất, mang lại sản phẩm chất lượng cao.',
            image: 'https://unila.com.vn/wp-content/uploads/2024/10/GIA-CONG-MY-PHAM-UNILA-PRODUCT-INSIGHT-01.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % contents.length,
                );
                setIsAnimating(true);
            }, 700);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        if (index === currentIndex) return;
        setIsAnimating(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(true);
            const splitParents = document.querySelectorAll('.split-parent');
            splitParents.forEach((el, idx) => {
                el.classList.add('slide-up');
                setTimeout(() => el.classList.remove('slide-up'), 700);
            });
        }, 7000);
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1 },
    };

    const currentContent = contents[currentIndex];

    return (
        <section className="home-banner one-scroll">
            <div className="banner-slider">
                <motion.div
                    className="image"
                    initial="hidden"
                    animate={isAnimating ? 'visible' : 'hidden'}
                    variants={imageVariants}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={currentContent.image}
                        alt="Banner"
                        initial="hidden"
                        animate={isAnimating ? 'visible' : 'hidden'}
                        variants={imageVariants}
                        transition={{ duration: 1.4 }}
                    />
                </motion.div>
                <div className="caption container">
                    <div className="content">
                        <motion.div
                            className={`banner-title ${
                                isAnimating ? 'slide-up' : ''
                            }`}
                            initial="hidden"
                            animate={isAnimating ? 'visible' : 'hidden'}
                            variants={titleVariants}
                            transition={{ duration: 0.8 }}
                            key={currentIndex}
                        >
                            <div className="split-parent">
                                <strong>{currentContent.title}</strong>
                            </div>
                            <div className="split-parent">
                                <strong>{currentContent.subtitle}</strong>
                            </div>
                        </motion.div>
                        <motion.div
                            className="desc"
                            initial="hidden"
                            animate={isAnimating ? 'visible' : 'hidden'}
                            variants={titleVariants}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            key={`${currentIndex}-desc`}
                        >
                            <p>{currentContent.description}</p>
                        </motion.div>
                    </div>
                </div>
                <div className="dots">
                    {contents.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${
                                index === currentIndex ? 'active' : ''
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSlider;
