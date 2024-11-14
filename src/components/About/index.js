// import React from 'react';
// import './About.scss';
// import images from '~/assets/images';
// import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

// const About = () => {
//     return (
//         <div className="about-wrapper section">
//             <div className="about-content">
//                 <small className="section-title">Về chúng tôi</small>
//                 <h2>
//                     Công ty TNHH HAROLD <br /> và những điều nổi bật
//                 </h2>
//                 <p>
//                     <strong> Công ty TNHH Harold </strong>, với nhiều năm kinh
//                     nghiệm trong ngành sản xuất và kinh doanh mỹ phẩm, tự hào là
//                     một trong những đơn vị hàng đầu cung cấp các dịch vụ từ sản
//                     xuất, gia công đến nghiên cứu và phát triển các dòng mỹ phẩm
//                     an toàn, hiệu quả, chất lượng cao. Chúng tôi áp dụng mô hình
//                     sản xuất khép kín cùng với trang thiết bị tiên tiến, đảm bảo
//                     chất lượng cho từng khâu trong quy trình sản xuất theo tiêu
//                     chuẩn CGMP ASEAN . Đội ngũ nhân viên chuyên nghiệp, được đào
//                     tạo bài bản, luôn sẵn sàng đáp ứng nhu cầu của khách hàng/
//                     đối tác. Nhà <strong>Harold </strong> cam kết cung cấp số
//                     lượng lớn sản phẩm an toàn- hiệu quả, chất lượng cao và đồng
//                     thời tạo ra thương hiệu riêng cho khách hàng/đối tác tiềm
//                     năng nhằm phát triển bền vững và khẳng định vị thế trong
//                     lòng người tiêu dùng.
//                     <strong>Harold </strong> không chỉ là một thương hiệu mà còn
//                     là một phong cách sống vì sức khoẻ và sắc đẹp.
//                 </p>
//                 {/* <div className="about-cards">
//                     <div className="about-card">
//                         <div className="about-title">
//                             <div className="icon">
//                                 <FontAwesomeIcon icon={faPhone} />
//                             </div>
//                             <h3>Conntact</h3>
//                         </div>
//                         <p>Lorem, ipsum dolor sit amet consectetur x</p>
//                     </div>
//                     <div className="about-card">
//                         <div className="about-title">
//                             <div className="icon">
//                                 <FontAwesomeIcon icon={faCalendarDays} />
//                             </div>
//                             <h3>Easy Booking </h3>
//                         </div>
//                         <p>Lorem, ipsum dolor sit amet consectetur x</p>
//                     </div>
//                     <div className="about-card">
//                         <div className="about-title">
//                             <div className="icon">
//                                 <FontAwesomeIcon icon={faPhone} />
//                             </div>
//                             <h3>Conntact</h3>
//                         </div>
//                         <p>Lorem, ipsum dolor sit amet consectetur x</p>
//                     </div>
//                     <div className="about-card">
//                         <div className="about-title">
//                             <div className="icon">
//                                 <FontAwesomeIcon icon={faCalendarDays} />
//                             </div>
//                             <h3>Easy Booking </h3>
//                         </div>
//                         <p>Lorem, ipsum dolor sit amet consectetur x</p>
//                     </div>
//                 </div> */}
//             </div>
//             <div className="about-img">
//                 <img src={images.aboutImg} alt="about img" />
//             </div>
//         </div>
//     );
// };

// export default About;
import React from 'react';
import './About.scss';
import images from '~/assets/images';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about-wrapper section">
            <div className="about-content">
                <small className="section-title">About Us</small>
                <h2>
                    HAROLD Co., Ltd. <br /> and Its Highlights
                </h2>
                <p>
                    <strong>HAROLD Co., Ltd.</strong>, with many years of
                    experience in the production and business of cosmetics,
                    proudly stands as one of the leading units providing
                    services from manufacturing, contract processing to research
                    and development of safe, effective, high-quality cosmetic
                    lines. We apply a closed production model along with
                    advanced equipment, ensuring quality at every step of the
                    production process according to CGMP ASEAN standards. Our
                    professional staff, well-trained, is always ready to meet
                    the needs of customers/partners. <strong>Harold</strong> is
                    committed to providing large quantities of safe, effective,
                    high-quality products while creating a unique brand for
                    potential customers/partners to ensure sustainable
                    development and solidify its position in the hearts of
                    consumers. <strong>Harold</strong> is not just a brand but
                    also a lifestyle focused on health and beauty.
                </p>
                {/* <div className="about-cards">
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Contact</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            <h3>Easy Booking</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Contact</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            <h3>Easy Booking</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                </div> */}
            </div>
            <div className="about-img">
                <img src={images.aboutImg} alt="about img" />
            </div>
        </div>
    );
};

export default About;
