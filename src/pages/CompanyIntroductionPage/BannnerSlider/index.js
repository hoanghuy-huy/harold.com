import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BannerSlider.scss';
const BannerSlider = () => {
    const contents = [
        {
            title: 'CÔNG TY SẢN XUẤT MỸ PHẨM HAROLD',
            subtitle: 'HAROLD COSMETICS COMPANY LIMITED',
            description:
                '"Cái tôi" của người chủ sẽ thể hiện rõ nhất qua sản phẩm.\n"Cái tôi sản phẩm" sẽ mang thiên hướng biểu đạt rõ cái tôi của chủ nhân.\nCEO Thảo Trang',

            image: '/Images/home-banner-1.png',
        },
        {
            title: 'Beauty, Reimagined. Redefined. Refreshed.',
            // subtitle: 'HAROLD COSMETICS COMPANY LIMITED',
            description:
                '"Indulge in our luxurious formulations, infused with essence of beauty. Every product is crafted to harmonize skin and soul, revealing radiant complexity."',

            image: '/Images/home-banner-1.png',
        },
        {
            title: 'Vẻ đẹp không chỉ nhìn thấy mà còn cảm nhận',
            // subtitle: 'HAROLD COSMETICS COMPANY LIMITED',
            description:
                'Vẻ đẹp thực sự không chỉ nằm ở cái nhìn bề ngoài mà còn tồn tại trong cảm giác mà nó mang lại.',

            image: '/Images/home-banner-1.png',
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
                            <div
                                className="split-parent"
                                style={{ fontSize: 35 }}
                            >
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
                            style={{ color: '#fff' }}
                        >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: currentContent.description.replace(
                                        /\n/g,
                                        '<br />',
                                    ),
                                }}
                            />
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
