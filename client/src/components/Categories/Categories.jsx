import React from 'react';
import './Categories.scss';
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img
                        src="https://assets.vogue.com/photos/5f5fac8b7d9362f52d645560/16:9/w_1280,c_limit/social-holding.jpg"
                        alt="photo1"
                    />
                    <button>
                        <Link to='/products/1' className='link'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://media.istockphoto.com/id/607763902/photo/fashion-pretty-woman-with-coffee-cup-wearing-black-rock-style.jpg?s=612x612&w=0&k=20&c=u1YZFp_5NctdjYKBjuacH6CXEc4Idu3UFM4Uo2RbOts="
                        alt="photo2"/>
                    <button>
                        <Link to='/products/1' className='link'>Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://t3.ftcdn.net/jpg/01/91/89/12/360_F_191891230_LRAZDEd8EZuG1SPmLMWGZfgVTRMP2zyD.jpg"
                         alt="photo 3"/>
                    <button>
                        <Link to='/products/1' className='link'>New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/Aqlv1GP3YnyVsttCf8_sWw/348s.jpg"
                                 alt="photo 4"/>
                            <button>
                                <Link to='/products/1' className='link'>Dress</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://conversationsabouther.net/wp-content/uploads/2015/12/fashion.jpg"
                                 alt="photo 5"/>
                            <button>
                                <Link to='/products/1' className='link'>Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.fastfashionnews.co.uk/wp-content/uploads/2020/11/Contemporary-Fashion.jpeg"
                         alt="photo 6"/>
                    <button>
                        <Link to='/products/1' className='link'>Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;