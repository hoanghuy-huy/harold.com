import React from 'react';
import styled from './Banner.module.scss';
const Banner = () => {
    return (
        <section className={styled.banner}>
            <div className={styled.container}>
                <div className={styled.bannerImg}>
                    <img src="https://unila.com.vn/wp-content/uploads/2024/10/Gia-cong-my-pham-sach-unila-viet-nam-5.jpg" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
