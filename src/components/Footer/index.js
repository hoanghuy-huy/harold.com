// import React from 'react';
// import './Footer.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faFacebook,
//     faInstagram,
//     faTiktok,
//     faYoutube,
// } from '@fortawesome/free-brands-svg-icons';
// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-address">
//                     <h3>CÔNG TY TNHH HAROLD</h3>
//                     <ul>
//                         <li>
//                             <strong>Văn phòng:</strong> 1436 Đường Trịnh Quang
//                             Nghị - Phường 7 - Quận 8 - TP.HCM - Việt Nam
//                         </li>
//                         <li>
//                             <strong>Địa chỉ:</strong> 91/15 Hà Giang - P1 -
//                             Thành phố Bảo Lộc - Tỉnh Lâm Đồng - Việt Nam
//                         </li>
//                         <li>
//                             <strong>Hotline:</strong> 0989.401.800 - 0394.682.913 - 0367.764.624 
//                         </li>
//                         <li>
//                             <strong>Email:</strong>{' '}
//                             <a>haroldgroup.co@gmail.com</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="footer-social ">
//                     <h3>Mạng xã hội</h3>
//                     <ul class="footer-list">
//                         <li>
//                             <span>Tiktok</span>
//                             <FontAwesomeIcon icon={faTiktok} className='mt-2'/>
//                         </li>
//                         <li>
//                             <span>Facebook</span>
//                             <FontAwesomeIcon icon={faFacebook} />
//                         </li>
//                         <li>
//                             <span>Instagram</span>
//                             <FontAwesomeIcon icon={faInstagram} />
//                         </li>
//                         <li>
//                             <span>Youtube</span>
//                             <FontAwesomeIcon icon={faYoutube} />
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-address">
                    <h3>HAROLD Co., Ltd.</h3>
                    <ul>
                        <li>
                            <strong>Office:</strong> 1436 Trinh Quang Nghi Street - Ward 7 - District 8 - Ho Chi Minh City - Vietnam
                        </li>
                        <li>
                            <strong>Address:</strong> 91/15 Ha Giang - P1 - Bao Loc City - Lam Dong Province - Vietnam
                        </li>
                        <li>
                            <strong>Hotline:</strong> 0989.401.800 - 0394.682.913 - 0367.764.624
                        </li>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:haroldgroup.co@gmail.com">haroldgroup.co@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Social Media</h3>
                    <ul className="footer-list">
                        <li>
                            <span>TikTok</span>
                            <FontAwesomeIcon icon={faTiktok} className='mt-2' />
                        </li>
                        <li>
                            <span>Facebook</span>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <span>Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <span>YouTube</span>
                            <FontAwesomeIcon icon={faYoutube} />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;