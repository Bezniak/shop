import React from 'react';
import Card from "../Card/Card";
import './List.scss'
import useFetch from "../../hooks/useFetch";
import {Preloader} from "../Preloader/Preloader";

const List = ({sort, catId, subCats, maxPrice}) => {

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters] [categories] [id]=${catId}${subCats.map(
            item => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

    return (
        <div className='list'>
            {loading
                ? <Preloader/>
                : (data?.map(item => (
                    <Card item={item} key={item.id}/>
                )))
            }
        </div>
    );
};

export default List;