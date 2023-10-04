import React from 'react'
import './Items.css'

const Items = ({src,h4,price}) => {
  return (
    <div>
         
            <div className="col4">
                <img src={src} />
                <h4>{h4}</h4>
          
                <p>{price}</p>
            </div>
                        
    </div>
  )
}

export default Items
