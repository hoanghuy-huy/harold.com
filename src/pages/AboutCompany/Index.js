import React from 'react';
import './AboutCompany.scss';
import Banner from './Banner';
import AboutUs from './AboutUs';
import BrandStory from './BrandStory';
import CertificateSection from './CertificateSection';

const AboutCompany = () => {
    return (
        <div className="About-Company-Page">
            <div className="container">
                <Banner />
                <AboutUs />
                <BrandStory />
                <CertificateSection />
            </div>
        </div>
    );
};

export default AboutCompany;
