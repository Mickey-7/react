// snippet: rafce - 1
import React, { useState } from "react";

const HookCounterThree = () => {
  // snippet : useS - 2
  // name is set to an object with firstName & lastName as fields
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      {/* the onChange method will trirger the setName method
        that will set the firstName to whatever input value */}
      {/* the ...name is IMPORTAANT as this will merge 
        the already exsting value on the fields, 
        without that no update will happen */}
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>Your first name is - {name.firstName}</h3>
      <h3>Your last name is - {name.lastName}</h3>
      {/* display input as JSON */}
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookCounterThree;
