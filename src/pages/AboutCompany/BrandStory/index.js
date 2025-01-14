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
                            src="\Images\story.png"
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
                            Khẳng định đẳng cấp mỹ phẩm Việt
                            <br />
                            Xây dựng niềm tin cho mỹ phẩm Việt
                        </motion.h3>
                        <div className={styled.desc}>
                            {[
                                'Mỹ phẩm Harold ra đời với sứ mệnh mang đến những sản phẩm chất lượng cao, an toàn và hiệu quả cho người tiêu dùng. Trong bối cảnh thị trường mỹ phẩm ngày càng phát triển, chúng tôi cam kết cung cấp các sản phẩm được chiết xuất từ nguyên liệu tự nhiên, không chứa hóa chất độc hại.',
                                'Chúng tôi hiểu rằng vẻ đẹp không chỉ đến từ sản phẩm, mà còn từ sự tin tưởng và uy tín. Với đội ngũ chuyên gia giàu kinh nghiệm, Harold không ngừng nghiên cứu và phát triển các sản phẩm đổi mới, đáp ứng nhu cầu ngày càng cao của khách hàng.',
                                'Với tâm huyết và sự sáng tạo, mỹ phẩm Harold hướng đến việc xây dựng một thương hiệu mạnh mẽ, góp phần nâng tầm mỹ phẩm Việt Nam trên thị trường quốc tế. Chúng tôi tự hào về giá trị mà sản phẩm của mình mang lại và cam kết mang đến sự hài lòng cho khách hàng qua từng sản phẩm.',
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
