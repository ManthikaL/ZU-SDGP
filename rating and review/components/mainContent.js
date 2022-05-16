import React from 'react'
import product_data from "../data/product_data";
import "./main.css";

const MainContent = () => {
    console.log(product_data);
    const listItems = product_data.map((item) =>
        <div className="card" key={item.id}>

            <div className="card_img">
                <img src={item.image} />
            </div>

            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='ranking'>{item.ranking}</p>
                <p className='starPatter'>{item.star_rating}</p>
            <div className='btn'>More Details</div>

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