// snippet : rafc then add Provider on the name
import React, { useState } from 'react'

//snippet : enf the remove all the unneccessary things
export const CartContext = React.createContext();


export const CartContextProvider = (props) => {
    //scnippte : useS
    const [cart, setCart] = useState([]);

    return (
        <div>
            <CartContext.Provider value={[cart,setCart]}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}
