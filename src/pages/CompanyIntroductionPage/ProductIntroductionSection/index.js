import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProductIntroductionSection.scss';

const ProductIntroductionSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.4  ,
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
                        src="https://www.laneige.com.vn/media/wysiwyg/1000_x_1000.jpg"
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
                    <h3>Khám phá sản phẩm làm chậm quá trình</h3>
                    <h3>lão hóa da BOUNCY & FIRM</h3>
                </div>
                <div className="content">
                    <p>
                        Với chiết xuất Hoa mẫu đơn và Phức hợp Collagen +
                        Peptide™
                    </p>
                    <p>giúp làn da căng mọng sau 1 đêm.</p>
                </div>
            </motion.div>
            <div className="divider"></div>
        </div>
    );
};

export default ProductIntroductionSection;
