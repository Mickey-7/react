import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import UserContainer from './container/UserTableContainer';
import AddUserContainer from './container/AddUserContainer';
import EditUserContainer from './container/EditUserContainer';

function App() {

  //blank useState for user to be updated
  const [selectedUser, setSelectedUser] = useState({id:null,name:"",username:""})
  //snippet : nfn
  //set the selected user to the input fields of edit form
  const getUser = (user) => {
    setSelectedUser({
      id:user.id,
      name:user.name,
      username:user.username,
    })
    console.log(user);
  }
  

  return (
    <div>
      <h3>User Management Using Redux</h3>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div className="container">
              <div>
              <AddUserContainer/>
              <br></br>
              {/* invoking the selected user as props */}
              <EditUserContainer selectUser={selectedUser}/>
              </div>
              <div>
                {/* invoking the bypassed userGet onClick as props */}
              <UserContainer userGet={getUser}/>
              </div>
            </div>
     
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
