// snippet : rafce
import React, { useState } from "react";

const mockData = [
  {
    id: 1,
    name: "George",
    age: 32,
    retiredate: "March 12, 2014",
  },
  {
    id: 2,
    name: "Edward",
    age: 17,
    retiredate: "June 2, 2023",
  },
  {
    id: 3,
    name: "Christine",
    age: 58,
    retiredate: "December 20, 2036",
  },
  {
    id: 4,
    name: "Sarah",
    age: 62,
    retiredate: "April 30, 2020",
  },
];

const OtherSortSample = () => {
  // storage for the sorted data
  const [sortedData, setSortedData] = useState([]);

  //   snippet : nfn
  const sortAge = () => {
    // sort by age - increasing
    mockData.sort((a, b) => {
      return a.age - b.age;
    });

    //   set data to be display as sorted ny afge
    setSortedData(mockData);
  };

  // snippet : nfn
  const sortName = () => {
    //   sort by name
    mockData.sort((a, b) => {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      //increasing A-Z
      if (nameA < nameB) {
        return -1;
      }
      // to reverse change < to >
    });

    //   set data to be display as sorted ny name
    setSortedData(mockData);
  };

  // snippet : nfn\
  const sortDate = () => {
    // sort by date
    mockData.sort((a, b) => {
      var dateA = new Date(a.retiredate),
        dateB = new Date(b.retiredate);
      //increasing
      return dateA - dateB;
      // to reverse change from  dateA - dateB
      // to dateB - dateA
    });

    //   set data to be display as sorted ny date
    setSortedData(mockData);
  };

  return (
    <div>
      <h3>Other Sort - raw mockData</h3>
      <button onClick={sortName}>Name</button>
      <button onClick={sortAge}>Age</button>
      <button onClick={sortDate}>Date</button>
      <div>
        {mockData.map((mock) => (
          // mock fields must be inside the div
          <div key={mock.id}>
            <div>Name : {mock.name}</div>
            <div>Age : {mock.age}</div>
            <div>Date : {mock.retiredate}</div>
            <br />
          </div>
        ))}
      </div>
      <p>
        need to refresh the page after the button is click to see the effect of
        another sort
      </p>
      <br />
      <br />
    </div>
  );
};

export default OtherSortSample;
