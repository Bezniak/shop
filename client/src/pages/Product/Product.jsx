import React, {useState} from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.summitmedia-digital.com/preview/images/2020/12/31/local-dress-shop-stylestaple.jpg",
        "https://www.greatplains.co.uk/cdn/shop/products/J1UBJ80_1333_800x.jpg?v=1676387130",
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]}
                         alt="img"
                         onClick={e => setSelectedImg(0)}
                    />
                    <img src={images[1]}
                         alt="img"
                         onClick={e => setSelectedImg(1)}
                    />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="photo"/>
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium cumque dolores excepturi
                    exercitationem explicabo fugiat laborum minus nulla odio omnis quam recusandae, reprehenderit
                    sapiente sed suscipit tempora tenetur voluptate.
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prevState => prevState === 1 ? 1 : prevState - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prevState => prevState + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr/>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>

            </div>
        </div>
    );
};

export default Product;