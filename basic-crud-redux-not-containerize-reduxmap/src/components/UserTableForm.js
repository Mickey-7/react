import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteUser } from '../redux/action'

const UserTableForm = (props) => {
    return (
        <div>
            <h3>Users List</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* invoking & iterating on the userList as props */}
                    {props.userList.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>     
                                    {/* invoking GET_USER_ACTION as props via UserTableContainer by passing user payload */}
                                    <button
                                        onClick={()=>props.userGet(user)}
                                    >
                                        Edit
                                    </button>
                                    {/* invoking DELETE_ACTION as props via UserTableContainer by passing id as payload */}
                                    <button
                                        onClick={()=>props.userDelete(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

// export default UserTableForm


//connecting to reduxmap
const mapStateToProps = (state) => {
    return {
        userList : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userDelete : deleteUser
        },
        dispatch
    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTableForm)
