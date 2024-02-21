import React from 'react';
import './FeaturedProducts.scss';
import Card from "../Card/Card";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202312/26/00119316800523____6__516x640.jpg",
            img2: "https://msmerimak.com/cdn/shop/files/pantalon-logan-camel_1.jpg?v=1694979229&width=533",
            title: "Long Sleeve T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/19a847d5c9f1bc9cbb5d93f1c6d891c5.jpg?imageView2/2/w/500/q/60/format/webp",
            img2: "https://m.media-amazon.com/images/I/51qGoaiqQXL._AC_UF1000,1000_QL80_.jpg",
            title: "Long",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/3a/e9/19/3ae919c634f37d5f00a69f4556d2ba25.jpg",
            img2: "https://m.media-amazon.com/images/I/81NXJ8lp5oL.jpg",
            title: "Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://specials-images.forbesimg.com/imageserve/6421e46c5409a18fdaa0087f/black-dress-pants/960x0.jpg?fit=scale",
            img2: "https://i.pinimg.com/564x/42/7a/e7/427ae7584fba547b1f4ca4956c88c988.jpg",
            title: "Trousers",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum earum est eum fuga illo laboriosam
                    necessitatibus quis sed sit voluptate! Accusamus aliquid delectus, dolorem ex maxime minus
                    perferendis quae similique!</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;