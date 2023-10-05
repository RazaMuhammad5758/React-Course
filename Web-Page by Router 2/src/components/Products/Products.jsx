import React from 'react'
import Items from '../Items/Items'

const Products = () => {
  return (
    <div className='small-container'>
      <div className='row'>

          <Items
            src = "/images/product-1.jpg"
            h4 = "Red T-Shirt"
            price = "$ 20.05"
          />
          <Items
            src = "/images/product-2.jpg"
            h4 = "Black Shoes"
            price = "$ 25.06"
            />
          <Items
            src = "/images/product-3.jpg"
            h4 = "Grey Trouser"
            price = "$ 18.00"
            />
          <Items
            src = "/images/product-4.jpg"
            h4 = "Blue T-Shirt"
            price = "$ 20.05"
            />
      </div>
      <div className='row'>

          <Items
            src = "/images/product-5.jpg"
            h4 = "Grey Shoes"
            price = "$ 15.05"
          />
          <Items
            src = "/images/product-6.jpg"
            h4 = "Blac T-Short"
            price = "$ 18.06"
            />
          <Items
            src = "/images/product-7.jpg"
            h4 = "Socks"
            price = "$ 08.00"
            />
          <Items
            src = "/images/product-8.jpg"
            h4 = "Wrist Watch"
            price = "$ 35.07"
            />
      </div>
    </div>
  )
}

export default Products
