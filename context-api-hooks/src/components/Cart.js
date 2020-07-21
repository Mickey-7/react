//snippet : rafc
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


export const Cart = () => {

    //snippet : useCon
    const [cart,setCart] = useContext(CartContext);
    //cart contains name and price from addToCart thru CartContext
    const totalPrice = cart.reduce((acc,curr) => acc + curr.price, 0)


    return (
        <div>
            <h3>Cart</h3>
            <span>
                items in cart : {cart.length}
            </span>
            <br></br>
            <span>
                total price : {totalPrice}
            </span>
            <br></br>
            {
                // iterate on cart to dosplay the items
         
                cart.map(items => (
                <h5>{items.name} : {items.price}</h5>
                ))
            }
        </div>
    )
}
