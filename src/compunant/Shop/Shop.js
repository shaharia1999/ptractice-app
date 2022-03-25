import React, { useEffect, useState } from 'react';
// import Fakedb from '../FakeDb/Fakedb';
import ProdectDetels from '../Products/ProdectDetels';
import Products from '../Products/Products';
import './Shop.css'
import Fakedb from './../FakeDb/Fakedb';
const Shop = () => {
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    const [product,setProduct]=useState([]);
    const addLesener=(cards)=>{
       Fakedb(cards.id)
        const newCard=[...product,cards];
        setProduct(newCard);
    }
    return(
        <div className='shop'>
            <div className='card-pard'>
                {
                    card.map(product=><Products add={addLesener} product={product}></Products>)
                }
                </div>
            <div className='detels-part'>
                <ProdectDetels pro={product}></ProdectDetels>
            </div>
        </div>
    );
};

export default Shop;