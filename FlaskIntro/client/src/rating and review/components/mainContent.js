import React, {useEffect, useState} from 'react'
import product_data from "../data/product_data";
import "./main.css";
import { Link } from 'react-router-dom';

const MainContent = (props) => {

    const [productData, setProductData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setProductData(data)
                // console.log("fetch data", data);
                // console.log(productData)
            }
        )
    }, [])


    console.log(productData)

    const listItems = (productData && typeof productData.products === 'undefined') ? (<p> loading ... </p>) :

        productData.products.map((item) =>
            <div className="card" key={item.id}>
                <div className="card_img">
                    <img src={item.image}/>
                </div>

                <div className="card_header">
                    <h2>{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className='ranking'>{item.ranking}</p>
                    <p className='starPatter'>{item.star_rating}</p>
                               <Link to = {item.link} exact="true">
                                    <div className='btn' >More Details</div>
                               </Link>

                </div>

            </div>
        );
    return (
        <div className="main_content">
            {listItems}

        </div>
    )
}
export default MainContent;