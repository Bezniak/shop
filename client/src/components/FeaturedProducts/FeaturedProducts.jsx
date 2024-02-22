import React, {useEffect, useState} from 'react';
import './FeaturedProducts.scss';
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({type}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters] [type] [$eq]=${type} `, {
                    headers: {
                        Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
                    }
                })
                console.log(res)
                setData(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    console.log(data)

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