import React, { useState } from 'react';
import './Slider.scss';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

    const data = [
        'https://themodelshop.ca/wp-content/uploads/2013/11/new-arrivals-in-ladies-fashion.jpg',
        'https://images.hellomagazine.com/horizon/landscape/c0243f7af12f-celine-t.jpg',
        'https://www.theindustry.fashion/wp-content/uploads/2023/04/Urban-Outfitters.jpg',
    ];

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt="photo" />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;