import React from 'react';
import About from '~/components/About';
import Header from '~/components/Header';
import ScrollToTop from '~/components/ScrollToTop';
import VisionMission from '~/components/VisionMission';

const HomePage = () => {
    ScrollToTop();
    return (
        <>
            <Header />
            <VisionMission />
            <About />
        </>
    );
};

export default HomePage;
