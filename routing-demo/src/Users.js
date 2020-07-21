import React from 'react'
import {Link, useRouteMatch, Switch, Route} from 'react-router-dom'
import User from './User';

function Users() {
    // for nested routing
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log(path)
  console.log(url)


    return (
        // <div>
        //     <div>
        //     <h3>Users List</h3>
        //     <ul>
        //         <li>
        //             <Link to="users/1">User 1</Link>
        //         </li>
        //         <li>
        //             <Link to="users/2">User 2</Link>
        //         </li>
        //         <li>
        //             <Link to="users/3">User 3</Link>
        //         </li>
        //     </ul>
        //     </div>
        // </div>

        <div>
            <h2>Topics</h2>
            <ul>
            <li>
                <Link to={`${url}/1`}>User 1 </Link>
            </li>
            <li>
                <Link to={`${url}/2`}>User 2 </Link>
            </li>
            <li>
                <Link to={`${url}/3`}>User 3 </Link>
            </li>
            </ul>

            <Switch>
            <Route exact path={path}>
                <h3>Please select user</h3>
            </Route>

            <Route path={`${path}/:userId`}>
                <User />
            </Route>
            </Switch>
        </div>

    )
}

export default Users
