import React, { useState, useEffect } from 'react';
import './BrandStory.scss';
import BannerSlider from './BannnerSlider';
import ProductIntroductionSection from './ProductIntroductionSection';
import BestSeller from './BestSeller';
import BrandingSec from './BrandingSec';
import BackgroundComp from './BackgroundComp';
import Background from './BackgroundComp';

const CompanyIntroductionPage = () => {
    return (
        <article>
            <div className="brand-story__inner">
                <BannerSlider />
                <ProductIntroductionSection />
                <BestSeller />
                <BrandingSec />
            </div>
            <Background />
        </article>
    );
};

export default CompanyIntroductionPage;
