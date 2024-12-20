import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import About from '~/components/About';
import Header from '~/components/Header';
import ScrollToTop from '~/components/ScrollToTop';
import VisionMission from '~/components/VisionMission';

const HomePage = () => {
    ScrollToTop();
    const { ref, inView } = useInView({
        threshold: 0.5, // Tỉ lệ phần trăm của phần tử cần hiển thị để kích hoạt
        triggerOnce: true, // Chỉ kích hoạt một lần
    });

    useEffect(() => {
        if (inView) {
            console.log('Section About đang trong view!');
        }
    }, [inView]);

    return (
        <>
            <Header />
            <VisionMission />
            <div ref={ref}>
                <About />
            </div>
        </>
    );
};

export default HomePage;