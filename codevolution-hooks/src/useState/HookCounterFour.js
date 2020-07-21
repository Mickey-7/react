// snippet : rafce - 1
import React, { useState } from "react";

const HookCounterFour = () => {
  //snippet : useS - 2
  // set items to array type data
  const [items, setItems] = useState([]);

  // snippet : nfn
  const addItem = () => {
    //invoke setItems
    setItems([
      // getting the exsiting value to merge from new one
      ...items,
      // generating new item object
      {
        id: items.length,
        // random number between 1 and 10
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {
          // invoke the items which is an array type
          items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default HookCounterFour;
