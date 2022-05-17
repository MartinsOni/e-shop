import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price, rate }) => {

  const [state, dispatch] = useStateValue()


  const addToBasket = () => {
    dispatch ({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rate: rate
      }
    })
  }

  return (
    <div>
      <div key={id} className="product">

        <div className="product_info">
          <h4 className="heading">{title}</h4>
          <img src={image} alt="product_image" className='image' />
          <p className='product_price'>
            <small>€</small>
            <strong>{price}</strong>
          </p>
          <span className="product_rating">Rating:
            {Array(rate).fill().map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </span>
        </div>

        <button className='add_button' onClick={addToBasket}>Add to Basket</button>

      </div>
    </div>
  )
}

export default Product