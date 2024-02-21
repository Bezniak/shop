import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, fuga impedit placeat qui quidem sunt tempora? Adipisci animi eos esse facilis libero maxime non, possimus qui! Impedit odio pariatur velit.</span>
                </div>
                <div className="item">
                    <h1>Contacts</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi eos error fuga laudantium nam neque nesciunt reprehenderit repudiandae veniam. Est exercitationem explicabo illo magni optio qui quos soluta vel.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Lamastore</span>
                    <span className="copyright">&copy; Copyright 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img className='payment' src="/img/payment.png" alt="payment"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;