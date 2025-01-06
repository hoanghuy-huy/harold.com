import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CertificateSection.scss';

const CertificateSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '0px 0px -70% 0px', once: true });

    return (
        <section className="certificateSection section" ref={ref}>
            <div className="contentLeft">
                <div className="imgContainer">
                    <motion.img
                        src="https://iwood.com.vn/wp-content/uploads/2022/12/iso-11-scaled.jpg" 
                        alt="Chứng chỉ"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : -100,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
            <div className="contentRight">
                <div className="contentText">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 50,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Chứng chỉ - Chứng nhận
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 50,
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        GMP (Good Manufacturing Practice)
                    </motion.h3>
                    <div className="desc">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Tiêu chuẩn GMP đảm bảo rằng sản phẩm được sản xuất và kiểm soát
                            theo tiêu chuẩn chất lượng nhất định, nhằm bảo vệ sức khỏe
                            người tiêu dùng.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificateSection;