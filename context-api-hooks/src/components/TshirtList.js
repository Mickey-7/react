//snippet : rafc
import React from 'react'
import { Tshirt } from './Tshirt'

export const TshirtList = () => {

    const mockData = [
        {name : "red-shirt", price : 10.99, id : 1},
        {name : "yellow-hoddie", price : 24.99, id : 2},
        {name : "blue-polo", price : 18.99, id : 3},
    ]

    return (
        <div>
        <h3>TshirtList</h3>   
        <hr></hr> 
        {
            mockData.map(item => (
                <Tshirt 
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    price={item.price}
                />
            ))
        }
        </div>
    )
}
