import React from 'react';
import './DetailProductPage.scss';
import CardProduct from '~/components/CardProduct';
import ScrollToTop from '~/components/ScrollToTop';
import images from '~/assets/images';
import data from '../../data/index.json';
import { useParams } from 'react-router-dom';
const DetailProductPage = () => {
    const { productId } = useParams();

    let product = data.products.find((product) => {
        return product.id === +productId;
    });
    console.log(images.moisturizerSerum);

    ScrollToTop();

    const handleOnClick = () => {
        window.location.href =
            'https://shopee.vn/product/116072017/27569605500';
    };
    if (!product) {
        return <h1 className="not-found">404 not found</h1>;
    }

    return (
        <div className="detail-product-page section">
            <div class="container">
                <div className="row">
                    <div className="col content-left ">
                        <div className="image-container">
                            <img src={product.image} />
                        </div>
                    </div>
                    <div className="col content-right">
                        <h1 className="title">{product.title}</h1>
                        <div className="desc mt-3">
                            <p>{product.desc}</p>
                            <br />
                            {product?.desc1 ? <p>{product.desc1}</p> : <></>}
                            {product?.desc2 ? <p>{product.desc2}</p> : <></>}
                            <p>
                                <strong>Thành phần hoạt chất chính:</strong> Dầu
                                (Olive, Jojoba), và Dimer dilinoleyl dimer
                                dilinoleate,
                                Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl
                                Dimer Dilinoleate.
                            </p>
                            <br />
                            <p>
                                <strong>Công dụng: </strong>
                                {/* <a href="https://unila.com.vn/san-pham-son-duong-moi-unila/">
                                    Serum dưỡng môi UNILA
                                </a>{' '} */}
                                được xem là người bạn đồng hành đắc lực không
                                thể thiếu cho phái đẹp. Bảng thành phần lành
                                tính chủ yếu là những chiết xuất từ thiên nhiên,
                                mang đến công dụng: Hỗ trợ làm mềm lớp biểu bì
                                của môi, hỗ trợ làm lành vết nứt nẻ trên môi,
                                Nuôi dưỡng và cung cấp ẩm cho đôi môi, tạo hiệu
                                ứng đôi môi hồng hào “mọng nước” và bảo vệ môi
                                khỏi tác hại của môi trường
                            </p>
                            <br />
                            <p>
                                <strong>Xuất xứ:</strong> Công ty TNHH UNILA
                            </p>
                        </div>
                        <div className="btn-buy">
                            <button class="btn">
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                    class="border"
                                >
                                    <polyline
                                        points="179,1 179,59 1,59 1,1 179,1"
                                        class="bg-line"
                                    />
                                    <polyline
                                        points="179,1 179,59 1,59 1,1 179,1"
                                        class="hl-line"
                                    />
                                </svg>
                                <a
                                    href="https://shopee.vn/product/116072017/27569605500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Mua Ngay</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProductPage;
