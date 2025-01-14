import React from 'react';

const CardProduct = ({ src, title, desc }) => {
    return (
        <div className="prod-item">
            <div class="product-item__thumb">
                <img class="product-item__img" src={src} alt={src} />
            </div>
            <div class="product-item__hash-wrap">
                <span class="product-item__hash">{desc}</span>
            </div>

            <strong class="product-item__name">{title}</strong>
        </div>
    );
};

export default CardProduct;
