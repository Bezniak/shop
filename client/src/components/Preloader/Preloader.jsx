import React from 'react';
import './Preloader.scss';

export const Preloader = () => {
    return (
        <div className='preloaderBlock'>
            <img src="/preloader.svg" alt="preloader"/>
        </div>
    );
};