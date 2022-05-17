import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvider'

const CheckoutProduct = ({id, image, title, price, rate}) => {


    const [{basket}, dispatch] = useStateValue()

   

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (

        <div className="outProduct">

            <div className="outProduct_info" style={{ display: "flex", alignItems: "center" }}>

                    <img src={image} alt="" id='Product_image' style={{ objectFit: "contain", width: "250px", height: "250px", margin: "0 25px" }} />
              
                <div>
                    <h4 className="outProduct_heading">{title}</h4>
                    <p className='product_price'>
                        <small style={{ color: "red" }}>€</small>
                        <strong style={{ color: "red" }}>{price}</strong>
                    </p>
                    <div className="outProduct_rating">Rating:
                        {Array(rate).fill().map(() => (
                            <span>⭐</span>
                        ))}

                    </div>

                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>

            </div>
        </div>
    )
}

export default CheckoutProduct