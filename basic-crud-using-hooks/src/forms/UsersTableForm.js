import React from 'react'

const UsersTableForm = (props) => {
    // getting the usersTable as (props) above 
    console.log(props.usersTable)

    return (
        <div>
            <h3> Users Table</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* iterating on tr and invokinmg props for displaying mock data */}
                    {props.usersTable.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                {/* invoking click arrow function to get user to be updated */}
                                <button onClick={()=>props.userGet(user)}>Edit</button>
                                {/* invoking the userDelete from app.js as props passing id */}
                                <button onClick={()=> props.userDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTableForm
