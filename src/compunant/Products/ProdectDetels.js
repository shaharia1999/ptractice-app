import React from 'react';
import './Products.css';
const ProdectDetels = ({pro}) => {
    let total=0;
    let shepping=0;
    let text=0;
    let grand=0;
    for( const product of pro){
        total=total + product.price;
        shepping=shepping+product.shipping;
        text= parseInt(total+shepping) * 10 /100;
        grand= parseInt(total +shepping+text)
    }
    return (
        <div className='detelas'>
            <h1>Deteles</h1>
            <h1>Total Order :{pro.length}</h1>
            <h2>Price :{total}</h2>
            <h2>Shipping :{shepping}</h2>
            <h2>tax :{text}</h2>
            <h2>Grand Total :{grand}</h2>
            <button>Buy Now</button>
        </div>
    );
};

export default ProdectDetels;