import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserTableForm from './components/UserTableForm';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {


  //blank useState for the user to be updated
  const [selectedUser, setSelectedUser] = useState({id:null,name:"",username:""})

  //setting the selected user to the user to be updated
  const getUser = (user) => {
    setSelectedUser({
      id:user.id,
      name:user.name,
      username:user.username,
    })
  }
  

  return (
    <div>
      <h3>User Management Using Redux</h3>
      <div className="container">
        <div>
          <AddUserForm/>
          <br></br>
          {/* invoking the user to be updated */}
          <EditUserForm selectUser={selectedUser}/>
        </div>

        <div>
          {/* invoking the user to be updated */}
          <UserTableForm userGet={getUser}/>
        </div>
      </div>

    </div>

  );
}

export default App;
