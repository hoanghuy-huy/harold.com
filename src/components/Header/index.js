// import React from 'react';
// import './Header.scss';
// import images from '~/assets/images';
// function Header() {
//     return (
//         <div className="header-wrapper section">
//             <div className="header-content">
//                 <h3>Công ty TNHH HAROLD</h3>
//                 <h1>
//                     {' '}
//                     Câu chuyện <br />{' '}
//                     <span className="pt-5">"THƯƠNG HIỆU"</span>
//                 </h1>
//                 <p>
//                     <strong>Công ty TNHH HAROLD</strong> là một trong những
//                     thương hiệu nổi bật trong ngành sản xuất mỹ phẩm chất lượng
//                     cao, với tất cả sản phẩm được sản xuất tại nhà máy đạt tiêu
//                     chuẩn CGMP ASEAN, chứng nhận bởi SGS. Nhà Harold luôn đặt
//                     niềm tin vào những thành tựu của y học và khoa học dành cho
//                     ngành công nghiệp sản xuất mỹ phẩm, vì lẽ đó mà đơn vị chúng
//                     tôi luôn chủ động hợp tác cùng các Chuyên gia đầu ngành -
//                     Bác sĩ - Nhà nghiên cứu để làm sao phát triển và tìm ra
//                     những hoạt chất mới, an toàn, hiệu quả. Chúng tôi tự tin
//                     mang đến cho người tiêu dùng những dòng sản phẩm cải tiến,
//                     chất lượng không thua kém các thương hiệu quốc tế, từ đó tạo
//                     nền tảng vững chắc cho việc khẳng định thương hiệu và mở ra
//                     cơ hội phát triển cùng các đối tác tiềm năng trong tương
//                     lai.
//                 </p>
//             </div>
//             <div className="header-img">
//                 <img
//                     src={images.banner}
//                     alt="banner image"
//                     className="banner-img"
//                 />
//             </div>
//         </div>
//     );
// }

// export default Header;
import React from 'react';
import './Header.scss';
import images from '~/assets/images';

function Header() {
    return (
        <div className="header-wrapper section">
            <div className="header-content">
                <h3>HAROLD Co., Ltd.</h3>
                <h1>
                    {' '}
                    The Story <br /> <span className="pt-5">"BRAND"</span>
                </h1>
                <p>
                    <strong>HAROLD Co., Ltd.</strong> is one of the leading
                    brands in the high-quality cosmetics manufacturing industry,
                    with all products produced at a factory meeting CGMP ASEAN
                    standards, certified by SGS. Harold Company always places
                    its trust in the achievements of medicine and science for
                    the cosmetics manufacturing industry. Therefore, our unit is
                    always proactive in collaborating with leading experts -
                    Doctors - Researchers to develop and discover new, safe, and
                    effective active ingredients. We are confident in providing
                    consumers with improved product lines that are on par with
                    international brands, thereby laying a solid foundation for
                    brand recognition and opening up opportunities for
                    development with potential partners in the future.
                </p>
            </div>
            <div className="header-img">
                <img
                    src={images.banner}
                    alt="banner image"
                    className="banner-img"
                />
            </div>
        </div>
    );
}

export default Header;
