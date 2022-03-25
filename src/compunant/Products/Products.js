import React from 'react';
import './Products.css'
const Products = (props) => {
    const {img,name,price,seller,ratings}=props.product;
    const add=props.add;
    return (
        <div className='product'>
        <img src={img} alt="product" />
            <h3>{name}</h3>
            <p>Price :{price}</p>
              <div className='p-info'>
              <p>Manufacture :{seller}</p>
              <p>Reation :{ratings}</p>
              <button onClick={()=>add(props.product)} className='card-footer' > Add to Card </button>
              </div>
             </div>
    );   
};
export default Products;
