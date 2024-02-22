import React from 'react';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202312/26/00119316800523____6__516x640.jpg",
            img2: "https://msmerimak.com/cdn/shop/files/pantalon-logan-camel_1.jpg?v=1694979229&width=533",
            title: "Long Sleeve T-shirt",
            desc: `Lorem ipsum dolor`,
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/19a847d5c9f1bc9cbb5d93f1c6d891c5.jpg?imageView2/2/w/500/q/60/format/webp",
            img2: "https://m.media-amazon.com/images/I/51qGoaiqQXL._AC_UF1000,1000_QL80_.jpg",
            title: "Long",
            desc: `Accusantium aspernatur autem deserunt ipsam iure qui sint velit`,
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="photo"/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 80)}...</p>
                        <div className='price'>1 x ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    );
};

export default Cart;