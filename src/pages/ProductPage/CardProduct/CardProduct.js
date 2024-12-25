import React from 'react';

const CardProduct = () => {
    return (
        <div className="prod-item">
            <div class="product-item__thumb">
                <img
                    class="product-item__img"
                    src="https://www.laneige.com//kr/ko/assets/image/best-new/new-product/bouncy_firm_sleeping_mask_thumbnail01_20040208.jpg"
                    alt="바운시 앤 펌 슬리핑 마스크"
                />
            </div>
            <div class="product-item__hash-wrap">
                <span class="product-item__hash">탱탱결광</span>
                <span class="product-item__hash">퍼밍슬리핑마스크</span>
            </div>

            <strong class="product-item__name">
                바운시 앤 펌 슬리핑 마스크
            </strong>
        </div>
    );
};

export default CardProduct;
