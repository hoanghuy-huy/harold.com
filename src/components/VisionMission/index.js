import React from 'react';
import images from '~/assets/images';
import './VisionMission.scss';

const VisionMission = () => {
    return (
        <section className="vision-mission-wrapper section">
            <div className="vision-mission-content">
                <h2 className="title">Tầm nhìn - Sứ mệnh</h2>
                <div className="cover-img">
                    <img
                        src={images.banner2}
                        alt="product img"
                    />
                </div>
                <div>
                    <div className="text-content">
                        <div className="vision">
                            <h3>Tầm Nhìn</h3>
                            <div className="description">
                                <p>
                                    Trong tương lai chúng tôi mong muốn cùng các
                                    đối tác/ chủ thương hiệu mỹ phẩm chinh phục
                                    chặng đường kinh doanh. Mở ra các cơ hội hợp
                                    tác bền vững, tạo ra những thương hiệu cá
                                    nhân độc quyền, sản phẩm luôn được kiểm định
                                    chất lượng theo đúng quy trình và được cấp
                                    đầy đủ giấy tờ chứng nhận chất lượng - an
                                    toàn của sản phẩm Và hơn hết là trở thành
                                    một người bạn đồng hành đáng tin cậy trong
                                    lòng người tiêu dùng trên hành trình hoàn
                                    thiện vẻ đẹp của bản thân. Đồng thời sẽ là
                                    một trong những công ty chuyên sản xuất mỹ
                                    phẩm chất lượng cao tại Việt Nam có uy tín
                                    và vị thế trong khu vực và Quốc Tế.
                                </p>
                            </div>
                        </div>
                        <div className="mission">
                            <h3>Sứ mệnh</h3>
                            <div className="description">
                                <p>
                                    Nhà Harold không chỉ chú trọng tới việc chăm
                                    sóc sắc đẹp mà còn bảo vệ sức khoẻ người
                                    tiêu dùng. Chúng tôi luôn hướng tới 1 cộng
                                    đồng yêu cái đẹp bền vững. Harold tin rằng
                                    mỗi sản phẩm đều mang trong mình một câu
                                    chuyện và sứ mệnh của chúng tôi là giúp cho
                                    khách hàng/ đối tác và mỗi người tiêu dùng
                                    viết nên câu chuyện đẹp nhất của chính họ.

                                </p>
                            </div>
                            <br />
                            <h3>Quyền lợi khách hàng</h3>
                            <div className="description">
                                <p>
                                    Khi hợp tác với công ty mỹ phẩm Harold, các
                                    đối tác sẽ nhận được nhiều quyền lợi thiết
                                    thực và giá trị: sản phẩm chất lượng với
                                    công thức độc quyền, thành phần nguyên liệu
                                    cao cấp. Đặc biệt, Harold cam kết thiết kế
                                    bao bì và logo chuyên nghiệp, giúp sản phẩm
                                    của đối tác nổi bật và thu hút khách hàng.
                                    Ngoài ra, công ty còn hỗ trợ xây dựng thương
                                    hiệu mạnh mẽ, giúp các đối tác khẳng định vị
                                    thế trên thị trường. Bên cạnh đó, Harold
                                    cung cấp đầy đủ giấy tờ kiểm định chất
                                    lượng, đảm bảo sản phẩm đáp ứng tiêu chuẩn
                                    cao nhất, từ đó tạo niềm tin cho khách hàng.
                                    Sự đồng hành này không chỉ mang lại lợi
                                    nhuận kinh doanh mà còn góp phần xây dựng
                                    hình ảnh thương hiệu vững mạnh và bền bỉ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
// import React from 'react';
// import images from '~/assets/images';
// import './VisionMission.scss';

// const VisionMission = () => {
//     return (
//         <section className="vision-mission-wrapper section">
//             <div className="vision-mission-content">
//                 <h2 className="title">Vision - Mission</h2>
//                 <div className="cover-img">
//                     <img
//                         src={images.banner2}
//                         alt="product img"
//                     />
//                 </div>
//                 <div>
//                     <div className="text-content">
//                         <div className="vision">
//                             <h3>Vision</h3>
//                             <div className="description">
//                                 <p>
//                                     In the future, we hope to partner with cosmetic brand owners to conquer the business journey. We aim to open sustainable collaboration opportunities, create exclusive personal brands, and ensure that products are always quality-checked according to the correct procedures and fully certified for quality and safety. Above all, we aspire to be a trusted companion in the hearts of consumers on their journey to enhance their beauty. We also aim to be one of the reputable companies specializing in high-quality cosmetics in Vietnam, with a strong position in the region and internationally.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="mission">
//                             <h3>Mission</h3>
//                             <div className="description">
//                                 <p>
//                                     Harold Company not only focuses on beauty care but also on protecting the health of consumers. We always strive for a sustainable community that loves beauty. Harold believes that each product carries a story, and our mission is to help customers/partners and every consumer write the most beautiful story of their own.
//                                 </p>
//                             </div>
//                             <br />
//                             <h3>Customer Benefits</h3>
//                             <div className="description">
//                                 <p>
//                                     When partnering with Harold Cosmetics, partners will receive many practical benefits and values: quality products with exclusive formulas and premium raw ingredients. In particular, Harold commits to professionally designing packaging and logos, helping partners' products stand out and attract customers. Additionally, the company supports building a strong brand, helping partners assert their position in the market. Moreover, Harold provides complete quality inspection documents, ensuring that products meet the highest standards, thereby building trust with customers. This partnership not only brings business profits but also contributes to building a strong and enduring brand image.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default VisionMission;