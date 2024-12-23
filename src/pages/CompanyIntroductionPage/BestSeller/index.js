import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BestSeller.scss';
import { DotSVG } from '~/components/Icon';
import { useInView } from 'react-intersection-observer';
const slides = [
    {
        title: '워터 슬리핑 마스크 EX',
        desc1: '낮동안 흐트러진 피부 리듬을 되찾고',
        desc2: '맑고 투명한 피부로 가꿔주는 수분 마스크',
        img2: 'https://www.laneige.com/kr/ko/layout/main/bestseller/__icsFiles/afieldfile/2024/11/14/240610_final_KR_INT_NEO-CUSHION_main_BestBanner.jpg',
        img1: 'https://www.laneige.com/kr/ko/layout/main/bestseller/__icsFiles/afieldfile/2024/11/14/240418_final_KR_WSM_main_bestseller_banner.jpg',
        background: '#ededed',
        numberProduct: 'BEST 1',
        titleLeft1: 'NEO CUSHION',
        titleLeft2: 'MATTE',
    },
    {
        title: '워터 슬리핑 마스크 EX',
        background: '#ffe4e1',
        desc1: '낮동안 흐트러진 피부 리듬을 되찾고',
        desc2: '맑고 투명한 피부로 가꿔주는 수분 마스크',
        img1: 'https://www.laneige.com/kr/ko/layout/main/bestseller/__icsFiles/afieldfile/2024/11/14/20230100_final_KR_WATER-BANK_main_bestseller.jpg',
        img2: 'https://www.laneige.com/kr/ko/layout/main/bestseller/__icsFiles/afieldfile/2024/11/14/20230100_final_KR_WATER-BANK_main_bestsellerPD_1.png',
        numberProduct: 'BEST 2',
        titleLeft1: 'NEO CUSHIONSS',
        titleLeft2: 'MATTELLE',
    },
];
function BestSeller() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const { ref, inView } = useInView({ threshold: 0.1 });
    const handleDotClick = (index) => {
        clearInterval(intervalId);
        setCurrentSlide(index);
        startSlideInterval();
    };

    const startSlideInterval = () => {
        const id = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        setIntervalId(id);
    };

    useEffect(() => {
        if (inView) {
            startSlideInterval();
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [inView]);

    return (
        <div className="BestSeller" ref={ref}>
            <div className="text">
                <h2 className="title">Best Sellers</h2>
                <p>Top sản phẩm bán chạy</p>
            </div>

            <div className="BestSeller-section">
                <div className="best-visual-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <motion.div
                                className="best-visual-img"
                                key={currentSlide}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <img
                                    src={slides[currentSlide].img1}
                                    alt={slides[currentSlide].title}
                                />
                            </motion.div>

                            <div class="best-visual-title">
                                <AnimatePresence>
                                    <motion.div
                                        className="best-num"
                                        key={currentSlide} // Gán key cho phần tử này
                                        initial={{
                                            opacity: 0,
                                            y: 100,
                                            filter: 'blur(5px)',
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: 'blur(0px)',
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 100,
                                            filter: 'blur(5px)',
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2,
                                        }}
                                    >
                                        <div
                                            className="slide-txt"
                                            key={currentSlide}
                                        >
                                            {slides[currentSlide].numberProduct}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <motion.div
                                    className="best-tit"
                                    key={currentSlide}
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                        filter: 'blur(5px)',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 100,
                                        filter: 'blur(5px)',
                                    }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="slide-txt">
                                        {slides[currentSlide].titleLeft1}
                                        <br />
                                        {slides[currentSlide].titleLeft2}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="best-info-slider"
                    style={{ background: slides[currentSlide].background }}
                >
                    <div className="best-info-cont">
                        <div className="best-info-wrap">
                            <div className="best-info-top">
                                <motion.div
                                    className="info-title"
                                    key={currentSlide}
                                    initial={{
                                        opacity: 0,
                                        visibility: 'hidden',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        visibility: 'visible',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        visibility: 'hidden',
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {slides[currentSlide].title}
                                </motion.div>
                            </div>
                            <div className="best-info-desc">
                                <motion.div
                                    className="desc"
                                    key={currentSlide}
                                    initial={{
                                        opacity: 0,
                                        visibility: 'hidden',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        visibility: 'visible',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        visibility: 'hidden',
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2, // Delay cho hiệu ứng xuất hiện lần lượt
                                    }}
                                >
                                    {slides[currentSlide].desc1}
                                    <br />
                                    {slides[currentSlide].desc2}
                                </motion.div>
                            </div>

                            <div className="info-img">
                                <div className="info-img-wrap">
                                    <AnimatePresence>
                                        <motion.img
                                            key={currentSlide} // Gán key cho để Framer Motion nhận diện
                                            src={slides[currentSlide].img2}
                                            alt={slides[currentSlide].img2}
                                            initial={{
                                                opacity: 0,
                                                x: 100,
                                            }} // Bắt đầu từ bên phải
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }} // Xuất hiện ở vị trí ban đầu
                                            exit={{
                                                opacity: 0,
                                                x: -100,
                                            }} // Biến mất sang bên trái
                                            transition={{
                                                duration: 0.5,
                                            }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="swiper-pagination-wrapper">
                                <div className="swiper-pagination">
                                    <div className="swiper-pagination-bullet">
                                        {slides.map((_, index) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    handleDotClick(index)
                                                }
                                            >
                                                <DotSVG
                                                    isActive={
                                                        currentSlide === index
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
