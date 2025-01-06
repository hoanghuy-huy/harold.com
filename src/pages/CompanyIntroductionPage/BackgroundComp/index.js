import React, { useEffect, useRef } from 'react';

const Background = () => {
    const blurRefs = useRef([]);

    const getRandomTransform = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        const rotation = 360;
        return `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg)`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            blurRefs.current.forEach((blur) => {
                blur.style.transform = getRandomTransform();
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="background">
            {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className="blur"
                    ref={(el) => (blurRefs.current[index] = el)}
                    style={{ transition: 'transform 1s ease-in-out' }}
                ></div>
            ))}
        </div>
    );
};

export default Background;
