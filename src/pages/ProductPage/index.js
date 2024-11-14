// import React from 'react';
// import './ProductPage.scss';
// import CardProduct from '~/components/CardProduct';
// import ScrollToTop from '~/components/ScrollToTop';
// import images from '~/assets/images';
// import { Link } from 'react-router-dom';
// const ProductPage = () => {
//     ScrollToTop();
//     return (
//         <div className="product-page section">
//             <div className="container">
//                 <div className="product-wrap">
//                     <h1 className="title">Sản phẩm</h1>
//                     <div className="product-list">
//                         <CardProduct
//                             src={images.Toner}
//                             title="Toner"
//                             desc="Toner hay còn gọi là dung dịch làm săn da hoặc nước cân bằng. Đây là sản phẩm dùng sau bước rửa mặt để toner len lỏi vào trong lỗ chân lông, lấy sạch bụi bẩn, vi khuẩn, dầu thừa mà nước tẩy trang và sữa rửa mặt không thể rửa sạch. Nếu bỏ qua bước sử dụng toner, một phần bụi bẩn đọng lại gây bít tắc lỗ chân lông.
// Có rất nhiều loại Toner như: Toner dưỡng ẩm, Toner tẩy tế bào chết, Toner điều trị…"
//                             path={'1'}
//                         />
//                         <CardProduct
//                             src={images.moisturizerSerum2}
//                             title="Serum dưỡng ẩm"
//                             desc="
// * Tăng cường sức đề kháng cho da khỏi các tác nhân lão hóa bên ngoài, nâng cao khả năng đàn hồi và săn chắc da 
// * Giúp trẻ hóa làn da, mang đến làn da căng mịn, sáng hồng rạng rỡ
// * Cung cấp độ ẩm cho da, làm sáng mịn da, làm đều màu da


// Toner cân bằng da 
//  Giúp cân bằng da, điều tiết dầu thừa và hỗ trợ cải thiện lỗ chân lông một cách hiệu quả, cho hiệu quả dưỡng ẩm tối ưu cho làn da dầu, mang lại cảm giác dịu nhẹ, dễ chịu và không bị nhờn dính."
//                             path={'2'}
//                         />
//                         <CardProduct
//                             src={images.bodyLotion}
//                             title="Body Lotion"
//                             desc="Body Lotion giúp cung cấp các dưỡng chất cần thiết cho da, như vitamin C, vitamin E, niacinamide, collagen… Các dưỡng chất này có khả năng thấm sâu vào bên trong da, cải thiện độ đàn hồi và săn chắc da, làm sáng da, ngăn ngừa các gốc tự do và các dấu hiệu lão hóa. Ngoài ra Lotion còn giúp cân bằng độ ẩm cho da, từ đó giúp hạn chế các vấn đề như mụn xuất hiện do da quá khô hoặc quá nhờn. Khi da được cấp ẩm đủ, nó sẽ trở nên mềm mại, mịn màng và đàn hồi."
//                         path={'3'}
//                        />
//                         <CardProduct
//                             src={images.moisturizerSerum}
//                             title="Moisturizer Serum"
//                             desc="Moisturizer dưỡng ẩm cho da
// Moisturizer sẽ cấp ẩm trực tiếp cho da, đồng thời khóa giữ độ ẩm này trên bề mặt da. Thông qua hoạt động này, moisturizer phát huy tác dụng dưỡng ẩm hiệu quả, ngăn ngừa tình trạng da bị khô ráp, sần sùi và tiết dầu nhờn quá mức."
//                             path={'4'}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductPage;


import React from 'react';
import './ProductPage.scss';
import CardProduct from '~/components/CardProduct';
import ScrollToTop from '~/components/ScrollToTop';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    ScrollToTop();
    return (
        <div className="product-page section">
            <div className="container">
                <div className="product-wrap">
                    <h1 className="title">Products</h1>
                    <div className="product-list">
                        <CardProduct
                            src={images.Toner}
                            title="Toner"
                            desc="Toner, also known as an astringent or balancing water, is a product used after cleansing to penetrate deep into the pores, removing dirt, bacteria, and excess oil that cleansing water and face wash cannot eliminate. Skipping the toner step leaves some dirt that can clog pores. There are many types of toners, such as moisturizing toner, exfoliating toner, and treatment toner."
                            path={'1'}
                        />
                        <CardProduct
                            src={images.moisturizerSerum2}
                            title="Moisturizer Serum"
                            desc="
* Strengthens the skin's resistance against external aging factors, enhancing skin elasticity and firmness.
* Rejuvenates the skin, providing a smooth, radiant complexion.
* Hydrates the skin, brightens and evens out skin tone.

Balancing Toner
 Helps balance the skin, regulates excess oil, and effectively improves pore appearance, providing optimal hydration for oily skin, leaving a soothing and comfortable feeling without stickiness."
                            path={'2'}
                        />
                        <CardProduct
                            src={images.bodyLotion}
                            title="Body Lotion"
                            desc="Body Lotion helps provide essential nutrients for the skin, such as vitamin C, vitamin E, niacinamide, and collagen. These nutrients can deeply penetrate the skin, improving elasticity and firmness, brightening the skin, and preventing free radicals and signs of aging. Additionally, lotion helps balance the skin's moisture, reducing issues like acne caused by overly dry or oily skin. When adequately hydrated, the skin becomes soft, smooth, and elastic."
                            path={'3'}
                        />
                        <CardProduct
                            src={images.moisturizerSerum}
                            title="Moisturizer"
                            desc="Moisturizer hydrates the skin directly while locking in this moisture on the skin's surface. Through this process, the moisturizer effectively provides hydration, preventing the skin from becoming rough, uneven, and producing excess oil."
                            path={'4'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;