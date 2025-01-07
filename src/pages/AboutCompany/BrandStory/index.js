import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from './BrandStory.module.scss';

const BrandStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '0px 0px -70% 0px', once: true });

    return (
        <section className={styled.BrandStory} ref={ref}>
            <div className={styled.container}>
                <div className={styled.contentLeft}>
                    <div className={styled.imgContainer}>
                        <motion.img
                            src="https://unila.com.vn/wp-content/uploads/2024/10/Gia-cong-my-pham-unila-viet-nam-IM2.png"
                            alt="Câu chuyện thương hiệu"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 70,
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
                <div className={styled.contentRight}>
                    <div className={styled.contentText}>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 50,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            Câu chuyện thương hiệu
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Nâng tầm thương hiệu mỹ phẩm Việt
                            <br />
                            Xóa bỏ định kiến mỹ phẩm OEM/ODM
                        </motion.h3>
                        <div className={styled.desc}>
                            {[
                                'Trong thế giới hiện đại, việc chăm sóc bản thân ngày càng trở nên quan trọng hơn bao giờ hết. Người tiêu dùng ngày nay tìm kiếm những sản phẩm không chỉ hiệu quả mà còn an toàn cho sức khỏe. Với nhu cầu ngày càng tăng về mỹ phẩm tự nhiên và hữu cơ, nhiều thương hiệu đã nổi lên để đáp ứng mong đợi này. Họ cam kết mang đến những sản phẩm chất lượng cao, được chiết xuất từ nguyên liệu thiên nhiên, không chứa hóa chất độc hại. Bằng sự sáng tạo và nghiên cứu không ngừng, các thương hiệu này nỗ lực mang lại những giải pháp làm đẹp bền vững và thân thiện với môi trường, giúp người tiêu dùng tự tin tỏa sáng với vẻ đẹp tự nhiên của mình.',
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
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
