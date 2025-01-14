import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import './BrandingSec.scss';

const slides = [
    {
        title: 'WE ARE READY TO STAND BY YOU',
        text: 'PARTNER, TRUST, GROW\nTHE TOP CHOICE IN THE COSMETICS INDUSTRY',
        imgSrc: '/Images/banding.png',
        subj: 'BEST',
    },
    {
        title: 'WE ARE READY TO STAND BY YOU',
        text: 'PARTNER, TRUST, GROW\nTHE TOP CHOICE IN THE COSMETICS INDUSTRY',
        imgSrc: '/Images/banding.png',

        subj: ' COSMETIC',
    },
    {
        title: 'WE ARE READY TO STAND BY YOU',
        text: 'PARTNER, TRUST, GROW\nTHE TOP CHOICE IN THE COSMETICS INDUSTRY',
        imgSrc: '/Images/banding.png',

        subj: 'PRODUCTION',
    },
];

const BrandingSec = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    const { ref: refBrandingSec, inView: brandingSecInView } = useInView({
        threshold: 0.1,
    });

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 7000);
    };

    const handleBulletClick = (index) => {
        clearInterval(intervalRef.current);
        setCurrentSlide(index);
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="branding-section" ref={refBrandingSec}>
            <div className="swiper-container">
                <div className="branding-slide-inner">
                    <div className="branding-text-wrap">
                        <AnimatePresence>
                            <motion.div
                                className="branding-title"
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    brandingSecInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                transition={{ duration: 0.6, delay: 0.4 }}
                                key={currentSlide}
                            >
                                <strong>{slides[currentSlide]?.title}</strong>
                            </motion.div>
                        </AnimatePresence>

                        <motion.div
                            className="branding-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                brandingSecInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            key={currentSlide}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <p>
                                {slides[currentSlide]?.text
                                    .split('\n')
                                    .map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                        </motion.div>
                    </div>
                    <div className="branding-img-wrap">
                        <picture className="branding-img-box">
                            <motion.div
                                className="branding-img-box"
                                key={currentSlide}
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: 1.1, opacity: 1 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    alt={slides[currentSlide]?.title}
                                    className="swiper-lazy swiper-lazy-loaded"
                                    src={slides[currentSlide]?.imgSrc}
                                />
                            </motion.div>
                        </picture>
                    </div>

                    <div className="pagination-wrap">
                        <div className="pagination">
                            <ul className="swiper-pagination">
                                {slides.map((slide, index) => (
                                    <li
                                        key={index}
                                        className={`bullet ${
                                            currentSlide === index
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() => handleBulletClick(index)}
                                    >
                                        <span className="slide-num">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="dot">.</span>
                                        <span className="slide-txt">
                                            {slide.subj}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingSec;
