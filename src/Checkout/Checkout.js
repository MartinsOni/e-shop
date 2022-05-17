import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../StateProvider'
import "./Checkout.css"

const Checkout = () => {

  const [{ basket }, dispatch] = useStateValue()
  console.log(basket)

  return (

    <div className='checkout'>

      <div className="checkout_left">

        <div className='basket'>
          <div>
            <h1 className="checkout_title">
              Shopping Basket
            </h1>
          </div>
          <div>
            {basket.map(item => (
              (<CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rate={item.rate}
              />)
            ))}
          </div>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout