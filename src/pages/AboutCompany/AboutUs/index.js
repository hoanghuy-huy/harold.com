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
                        initial={{ opacity: 0, y: 50 }} 
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
                                    Giới thiệu về Công ty Sản xuất Mỹ phẩm Hàng đầu
                                </h3>
                                {[
                                    'Chúng tôi chuyên cung cấp dịch vụ sản xuất và gia công mỹ phẩm chất lượng cao, với quy trình hiện đại và tiêu chuẩn an toàn nghiêm ngặt.',
                                    'Đội ngũ chuyên gia của chúng tôi có kinh nghiệm dày dạn trong ngành công nghiệp mỹ phẩm, cam kết mang đến sản phẩm tốt nhất cho khách hàng.',
                                    'Chúng tôi luôn cập nhật công nghệ mới và xu hướng thị trường, để phát triển các sản phẩm đáp ứng nhu cầu đa dạng của người tiêu dùng.',
                                    'Với tâm huyết và sự sáng tạo, chúng tôi không ngừng nỗ lực để đem lại giá trị và sự hài lòng cho khách hàng qua từng sản phẩm.'
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