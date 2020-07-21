import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Link,BrowserRouter} from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
// for 404 Pages
import {Switch} from 'react-router-dom'
import NotFoundPage from './NotFoundPage';
import Users from './Users';



function App() {
  return (
    // // invoking the router's path & component
    // <BrowserRouter>
    //   <Route exact path="/comp1" component={Component1}/>
    //   <Route exact path="/comp2" component={Component2}/>
    // </BrowserRouter>

    // // adding navigation Link
    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/comp1">Component1</Link>
    //     </li>
    //     <li>
    //       <Link to="/comp2">Component2</Link>
    //     </li>
    //   </ul>
    //   <hr></hr>
    //   <Route exact path="/comp1" component={Component1}/>
    //   <Route exact path="/comp2" component={Component2}/>
    // </BrowserRouter>

    // // adding 404 Pages
    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/comp1">Component1</Link>
    //     </li>
    //     <li>
    //       <Link to="/comp2">Component2</Link>
    //     </li>
    //   </ul>
    //   <hr></hr>
    //   {/* invoking Switch */}
    //   <Switch>
    //     <Route exact path="/comp1" component={Component1}/>
    //     <Route exact path="/comp2" component={Component2}/>
    //     <Route component={NotFoundPage} />
    //   </Switch>
    // </BrowserRouter>

    // // adding URL Parameters
    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/comp1">Component1</Link>
    //     </li>
    //     <li>
    //       <Link to="/comp2">Component2</Link>
    //     </li>
    //     <br></br>
    //     for URL Parameter
    //     <li>
    //       <Link to="/users">Users</Link>
    //     </li>
    //   </ul>
    //   <hr></hr>
    //   {/* invoking Switch */}
    //   <Switch>

    //     <Route exact path="/comp1" component={Component1}/>
    //     <Route exact path="/comp2" component={Component2}/>

    //     {/* no need to put exact - cause it will not render the components inside of it */}
    //     {/* this took many fucking hours!!!!!!! */}
    //     <Route  path="/users" component={Users}/>

    //     {/* for 404 Page */}
    //     <Route component={NotFoundPage} />

    //   </Switch>
    // </BrowserRouter>

    // for Nested Routing - same as URL parameter but now showing component inside Users
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/comp1">Component1</Link>
      </li>
      <li>
        <Link to="/comp2">Component2</Link>
      </li>
      <br></br>
      for URL Parameter
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    <hr></hr>
    {/* invoking Switch */}
    <Switch>

      <Route exact path="/comp1" component={Component1}/>
      <Route exact path="/comp2" component={Component2}/>

      {/* no need to put exact - cause it will not render the components inside of it */}
      {/* this took many fucking hours!!!!!!! */}
      <Route  path="/users" component={Users}/>

      {/* for 404 Page */}
      <Route component={NotFoundPage} />

    </Switch>
    </BrowserRouter>



  );
}

export default App;
