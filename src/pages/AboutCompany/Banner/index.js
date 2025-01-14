import React from 'react';
import styled from './Banner.module.scss';
const Banner = () => {
    return (
        <section className={styled.banner}>
            <div className={styled.container}>
                <div className={styled.bannerImage}>
                    <img src="\Images\banner-product.png" alt="banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
