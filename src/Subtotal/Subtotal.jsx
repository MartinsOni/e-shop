import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue()


    return (

        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>€{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />
                            This order contains a gift item
                        </small>
                    </div>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}    

            />
            <button>Proceed to Checkout</button>
        </div>

    )
}

export default Subtotal