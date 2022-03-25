import React from 'react';
const Fakedb = (props) => {
    const card=props;
    let shopingCard={};
    const storeCard=localStorage.getItem('shoping-card');
  if(storeCard){
    shopingCard=JSON.parse(storeCard)
  }
    const quentity=shopingCard[card]
    if(quentity){
       const newquentity=parseInt(quentity)+1;
       shopingCard[card]=newquentity;
 
    }else{
        shopingCard[card]=1;
    }
    let newShoping=JSON.stringify(shopingCard)
    localStorage.setItem('shoping-card',newShoping)
    return (
        <div>
        </div>
    );
};
    export default Fakedb;