import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UsersTableForm from './forms/UsersTableForm';

function App() {
  // array of objects for mock data
  const usersData = [
    {id:1,name:"name1",username:"username1"},
    {id:2,name:"name2",username:"username2"},
    {id:3,name:"name3",username:"username3"},
  ]

  //invoking the mock data into the useState hook
  const [users, setUsers] = useState(usersData)

  //method to addUser
  const addUser = (user) => {
    // for auto increment id
    user.id = users.length+1
    //adding new user to the exisiting mockdata
    //...users -> mockdata
    setUsers([...users,user])
  }

  //arrow function for deleteUser
  //snippet : nfn
  const deleteUser = (id) => {
    //.filter will output all the user with id not equal to selected id
    setUsers(users.filter(user => user.id !== id))
  }


  // //create new blank useState which will store user to be update
  const initialFormState = {id:null,name:"",username:""}
  const [selectedUser, setSelectedUser] = useState(initialFormState); 
  //arrow function to get the user to be edited
  const getUser = (user) => {
    console.log(user);
    setSelectedUser({
      id:user.id,
      name:user.name,
      username:user.username
    })

  }
  
  const editUser = (id,selUser) => {
    //mapping thru users then will return the updated user (selUser) if id is equal
    //otherwise, return it as is (user - pertains to the users that will not be updated but still on the users)
    setUsers(users.map(user => 
      (user.id===id ? selUser : user) 
    ))
  }
  
  return (
    <div>
      <h3>CRUD App with Hooks</h3>

      <div className="container">
        <div className="box">
          {/* invoking the addUser function as props */}
          <AddUserForm userAdd={addUser}/>

          {/* invoking selectedUser */}
          {/* invoking editUser */}
          <EditUserForm userSelected={selectedUser} userEdit={editUser}/>
        </div>
        
        <div className="box">
          {/* invoking the users hook as props */}
          {/* invoking deleteUser */}
          {/* invoking updateUser */}
          <UsersTableForm usersTable={users} userDelete={deleteUser} userGet={getUser}/>
        </div>
      </div>  

    </div>

  );
}

export default App;
