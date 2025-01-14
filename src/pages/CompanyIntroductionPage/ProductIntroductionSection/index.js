import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProductIntroductionSection.scss';

const ProductIntroductionSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="ProductIntroductionSection section" ref={ref}>
            <motion.div
                className="content-left"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ duration: 0.6 }}
            >
                <div className="image-container">
                    <img
                        src="/Images/banner-2.png"
                        alt="Sản phẩm"
                    />
                </div>
            </motion.div>
            <motion.div
                className="content-right"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ duration: 0.8 }}
            >
                <div className="title">
                    <h3>LÀ CHÍNH BẠN</h3>
                    <h3>yêu những gì thuộc về bạn</h3>
                </div>
                <div className="content">
                    <p>
                        Vẻ đẹp của bạn bắt nguồn từ sự tự tin và cá tính riêng.
                    </p>
                    <p>
                        Khám phá những điều
                        làm bạn trở nên đặc biệt.
                    </p>
                </div>
            </motion.div>
            <div className="divider"></div>
        </div>
    );
};

export default ProductIntroductionSection;
