//snippet : rafc
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


export const Tshirt = (props) => {


    //snippet : useCOn
    const [cart,setCart] = useContext(CartContext);

    //snippet : nfn
    const addToCart = () => {
        //get the selected item as props from TshirtList.js the set to varialble shirt
        const shirt = {name : props.name, price : props.price}
        //invoke the cart from CartContext by setCart
        setCart(currentState => [...currentState, shirt])
    }
    


    return (
        <div>
            <ul>
                <li  >
                    <h3>{props.name}</h3>
                    <h4>{props.price}</h4>
                    <button onClick={addToCart}>
                        Add to cart
                    </button>
                </li>
            </ul>

        </div>
    )
}
