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
                            initial={{ opacity: 0, x: 50 }}
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
                                "Người tiêu dùng hiện đại mong muốn cân bằng giữa việc chăm sóc sắc đẹp nhưng vẫn bảo vệ sức khỏe. Cán cân cung – cầu của thị trường mỹ phẩm ghi nhận số liệu có phần nghiên về mốc cầu, chứng tỏ tiềm năng phát triển rực rỡ của nhóm ngành này. Tuy nhiên, theo nhiều nguồn thống kê đáng tin cậy, tỷ lệ mỹ phẩm gia công không đạt chuẩn vẫn hoạt động trên thị trường lên đến 30% với các vi phạm phổ biến: Sử dụng các chất cấm hoặc quá liều các hoạt chất: Corticoid, thủy ngân, chì, Asen,… Nhận thấy tác hại khôn lường của mỹ phẩm kém chất lượng, ngay từ những ngày đầu thành lập, Gia công mỹ phẩm UNILA tâm đắc và thực hiện hoạt động kinh doanh theo châm ngôn: Nâng tầm thương hiệu Việt – Xóa bỏ định kiến mỹ phẩm OEM/ODM.",
                                "Chúng tôi mong muốn đem đến cho người tiêu dùng Việt những dòng mỹ phẩm Việt có chất lượng không kém cạnh bất kỳ thương hiệu du nhập từ nước ngoài. Toàn bộ sản phẩm được sản xuất tại nhà máy Gia công mỹ phẩm UNILA đều đảm bảo chất lượng cao nhất. Chúng tôi mạnh dạn cam kết sản xuất 100% mỹ phẩm sạch đầu tiên tại Việt Nam. Gia công mỹ phẩm UNILA luôn trân trọng sự sáng tạo và những thành tựu mà nền khoa học/y học dành cho ngành sản xuất mỹ phẩm. Chúng tôi đề cao giá trị bằng sự chủ động hợp tác cùng các chuyên gia/bác sĩ/nhà nghiên cứu hàng đầu của các trường Đại học nổi tiếng tại Việt Nam nhằm nghiên cứu & phát triển những hoạt chất theo 3 tiêu chí Mới nhất – Chất lượng – An toàn. UNILA tự tin mang đến những sản phẩm sở hữu công thức cải tiến độc quyền với chất lượng và hiệu quả ưu việt. Bằng sự nhiệt huyết và chuyên nghiệp của mình, Gia công mỹ phẩm UNILA hứa hẹn là đơn vị kiến tạo thành công cho thương hiệu mỹ phẩm của Bạn."
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