import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { addUser } from '../redux/action'
import { connect } from 'react-redux'

const AddUserForm = (props) => {
        //blank initial form set to useState for user
        const initialForm = {id:null,name:"",username:""}
        const [userNew, setUserNew] = useState(initialForm)
    
    
        //snippet : nfn
        const handleInputChange = (event) => {
            //snippet : dob
            const {name,value} = event.target
    
            setUserNew({...userNew,[name]:value});
    
            console.log(userNew);
        }
    return (
        <div>
            <h3>Add User Form</h3>
            
            <form
                onSubmit={event=>{
                    event.preventDefault();
                    props.userAdd(userNew)
                    //clear input fields
                    setUserNew(initialForm)
                }}
            >
                <label>Name : </label><br/>
                <input 
                    name="name"
                    value={userNew.name}
                    onChange={handleInputChange}
                    type="text"
                /><br/>
                <label>Username : </label><br/>
                <input 
                    name="username"
                    value={userNew.username}
                    onChange={handleInputChange}
                    type="text"
                /><br/>
                <button>Submit</button><br/>
            </form>
        </div>
    )
}

// export default AddUserForm

//connecting component to reduxmap

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = dispatch => {
    console.log("add component");
    return bindActionCreators(
        {
            userAdd : addUser,
        },
        dispatch
    )
}

export default connect(
    null,
    mapDispatchToProps
)(AddUserForm)
