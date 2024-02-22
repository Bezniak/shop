import React, {useState} from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import {Preloader} from "../../components/Preloader/Preloader";

const Product = () => {

    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)

    const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

    return (
        <div className='product'>
            {loading
                ? <Preloader/>
                : (
                    <>
                        <div className="left">
                            <div className="images">
                                <img
                                    src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                                    alt="img"
                                    onClick={e => setSelectedImg("img")}
                                />
                                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                                     alt="img"
                                     onClick={e => setSelectedImg("img2")}
                                />
                            </div>
                            <div className="mainImg">
                                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="photo"/>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Title</h1>
                            <span className='price'>$199</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium cumque dolores
                                excepturi
                                exercitationem explicabo fugiat laborum minus nulla odio omnis quam recusandae,
                                reprehenderit
                                sapiente sed suscipit tempora tenetur voluptate.
                            </p>
                            <div className="quantity">
                                <button
                                    onClick={() => setQuantity(prevState => prevState === 1 ? 1 : prevState - 1)}>-
                                </button>
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
                    </>
                )
            }
        </div>
    );
};

export default Product;