import React from 'react';
import './Items.css';
import {EcomProducts} from '../../EcomProducts'

const Items = ({  }) => {
  return (

    <>
    {
      EcomProducts.map((ecom)=>(
        <div  key={ecom.id}>

          <div className='col4'>
          <img src={ecom.images} alt={ecom.title} />
          <h4>{ecom.title}</h4>
          <p>{ecom.price}</p>
          
        </div>
    </div>
        ))
        
      }
      </>
  );
};

export default Items;
