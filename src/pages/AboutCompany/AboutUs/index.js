import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from './AboutUs.module.scss';

export default function AboutUs() {
    const ref = useRef(null);
    const headerRef = useRef(null);

    const isInView = useInView(ref, {
        margin: '0px 0px -70% 0px',
        once: true,
    });
    const isHeaderInView = useInView(headerRef, { once: true });
    return (
        <section className={styled.aboutUs}>
            <div className={styled.container}>
                <div className={styled.content} ref={ref}>
                    <motion.div
                        className={styled.contentLeft}
                        initial={{ opacity: 0, y: 50 }} // Bắt đầu với opacity 0 và dịch chuyển xuống
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 50,
                        }}
                    >
                        <div className={styled.contentText}>
                            <motion.h1
                                className={styled.title}
                                ref={headerRef}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: isHeaderInView ? 1 : 0,
                                    y: isHeaderInView ? 0 : 50,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                Về chúng tôi
                            </motion.h1>
                            <div className={styled.desc}>
                                <h3>
                                    Giới thiệu UNILA Việt Nam – Nhà máy sản xuất
                                    mỹ phẩm xu thế mới
                                </h3>
                                {[
                                    'Gia công mỹ phẩm UNILA chuyên cung cấp dịch vụ liên quan đến sản xuất, gia công, nghiên cứu và phát triển các dòng mỹ phẩm theo hình thức OEM/ODM.',
                                    'Gia công mỹ phẩm UNILA chuyên cung cấp dịch vụ liên quan đến sản xuất, gia công, nghiên cứu và phát triển các dòng mỹ phẩm theo hình thức OEM/ODM.',
                                    'Gia công mỹ phẩm UNILA chuyên cung cấp dịch vụ liên quan đến sản xuất, gia công, nghiên cứu và phát triển các dòng mỹ phẩm theo hình thức OEM/ODM.',
                                    'Gia công mỹ phẩm UNILA chuyên cung cấp dịch vụ liên quan đến sản xuất, gia công, nghiên cứu và phát triển các dòng mỹ phẩm theo hình thức OEM/ODM.',
                                ].map((text, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            y: isInView ? 0 : 50,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: (index + 1) * 0.3,
                                        }}
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styled.contentRight}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : 50,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styled.imgContainer}>
                            <img
                                src="https://unila.com.vn/wp-content/uploads/2024/10/UNILA-VIET-NAM-GIA-CONG-MY-PHAM.jpg"
                                alt="about-us"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
