import React, { useState, useEffect } from "react";
import "./App.css";
import OtherSortSample from "./OtherSortSample";

// create mock data - array of objects - 1
const bands = [
  {
    id: 1,
    name: "Nightwish",
    albums: 9,
    members: 6,
    formed_in: 1996,
  },
  {
    id: 2,
    name: "Metallica",
    albums: 10,
    members: 4,
    formed_in: 1981,
  },
  {
    id: 3,
    name: "Nirvana",
    albums: 3,
    members: 3,
    formed_in: 1987,
  },
];

function App() {
  // snippet : useS - 3
  // create empty array for storage of sorted data
  const [data, setData] = useState([]);
  // snippet : useS - 4
  // default sorting and will also being watched when changes
  // link between JSX and the category to be sorted
  const [sortBy, setSortBy] = useState("");

  // snippet : nfn - 7
  // handle the sorting stuff
  // useEffect will be trigger when there is change on sortBy
  useEffect(() => {
    // snippet : nfn - 8
    const sortArray = (type) => {
      // the type is for the left column only
      // which corresponds to value on option tag
      console.log(type);
      // create const types which will
      // set the type (left column)
      // which is the value from option tag on JSX
      // to object fields value (right column) - 9
      const types = {
        // left : type
        // right : from mock data fields
        alb: "albums",
        mem: "members",
        for: "formed_in",
      };
      // the sortProperty will select the specific type to be sorted from types
      const sortProperty = types[type];
      console.log(sortProperty);
      // copy of the bands array, sort it and then call setData with this array - 10
      // change the rendering array on JSX to data - 11
      const sorted = [...bands].sort(
        // result will be decreasing...
        // reverse to make it increasing
        // a[sortProperty] - b[sortProperty]
        (a, b) => a[sortProperty] - b[sortProperty]
      );

      // setData to sorted data
      setData(sorted);
    };

    // invoking the sortArray(type) function above
    // with sortBy as input parameter
    // type : sortBy - which is value from option tag on JSX
    sortArray(sortBy);
    console.log(sortBy);

    // will be rendered if there is change on sortBy
  }, [sortBy]);

  return (
    <div className="App">
      {/* add select with option tag inside it - 5 */}
      {/* add the onChange property invoking setSortType inside on select tag - 6 */}
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value=""></option>
        <option value="alb">Albums</option>
        <option value="mem">Members</option>
        <option value="for">Formed_in</option>
      </select>
      <br />
      <br />

      {/* render the mock data - 2 */}
      <h3>raw data</h3>
      {bands.map((band) => (
        <div key={band.id}>
          <div>{`Band : ${band.name}`}</div>
          <div>{`Albums : ${band.albums}`}</div>
          <div>{`Members : ${band.members}`}</div>
          <div>{`Year of Founding : ${band.formed_in}`}</div>
          <br />
        </div>
      ))}
      <hr />

      <h3>sorted data</h3>
      {/* change the rendering array on JSX to data - 11 */}
      {data.map((band) => (
        <div key={band.id}>
          <div>{`Band : ${band.name}`}</div>
          <div>{`Albums : ${band.albums}`}</div>
          <div>{`Members : ${band.members}`}</div>
          <div>{`Year of Founding : ${band.formed_in}`}</div>
          <br />
        </div>
      ))}
      <hr />

      <OtherSortSample />
    </div>
  );
}

export default App;
