import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { editUser } from '../redux/action'
import { connect } from 'react-redux'

const EditUserForm = (props) => {
        //useState to get the selected user
        const [selectedUser, setSelectedUser] = useState(props.selectUser)
    
        // useEffect to set the selected user as props
        useEffect(() => {
            setSelectedUser(props.selectUser)
        }, [props.selectUser])

    
    
        //snippet : nfn
        const handleInputChange = (event) => {
            //snippet : dob
            const {name,value} = event.target
    
            setSelectedUser({...selectedUser,[name]:value});
    
            console.log(selectedUser);
        }
    return (
        <div>
            <h3>Edit User Form</h3>

            
            <form
                onSubmit={event=>{
                    event.preventDefault();
                    props.userEdit(selectedUser)
                    //clear input fields
                    setSelectedUser({id:null,name:"",username:""})
                }}
            >
                <label>Name : </label><br/>
                <input 
                    name="name"
                    value={selectedUser.name}
                    onChange={handleInputChange}
                    type="text"
                /><br/>
                <label>Username : </label><br/>
                <input 
                    name="username"
                    value={selectedUser.username}
                    onChange={handleInputChange}
                    type="text"
                /><br/>
                <button>Submit</button><br/>
            </form>
        </div>
     
    )
}

// export default EditUserForm

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userEdit : editUser
        },
        dispatch
    )
}


export default connect(
    null,
    mapDispatchToProps
)(EditUserForm)

