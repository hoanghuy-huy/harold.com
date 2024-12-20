import React, { useState, useEffect } from 'react';
import './BrandStory.scss';
import BannerSlider from './BannnerSlider';
import ProductIntroductionSection from './ProductIntroductionSection';
import BestSeller from './BestSeller';

const CompanyIntroductionPage = () => {
    return (
        <article>
            <div className="brand-story__inner">
                <BannerSlider />
                <ProductIntroductionSection />
                <BestSeller />
            </div>
        </article>
    );
};

export default CompanyIntroductionPage;
