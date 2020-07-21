import React, { useState } from 'react'

const AddUserForm = (props) => {
    // getting the addUsers as (props) above 

    //creating blank user form which will store the new user
    const initialFormState = {id:null,name:"",username:""}
    const [user, setUser] = useState(initialFormState)

    //method for gathering the user input on the fields
    // snippet is nfn
    const handleInputChange = (event) => {
        // snippet is dob
        //get the input field values
        const {name,value} = event.target

        //set the values from input fields to user form above
        //[name] pertains to name property of the input field
        //value pertains to user input
        setUser({...user,[name]:value})
        
        //snippet is cl
        console.log(user);
        console.log(name);
        console.log(value);

    }

    return (
        <div>
            <h3>Add User Form</h3>

            <form onSubmit={event => {
                //for the page not to refresh
                event.preventDefault()
                //setting the input field content to the blank form state
                setUser(initialFormState)
                //invoking the addUser function that was from App.js as userAdd props
                props.userAdd(user)

            }}>
                <label>Name</label><br/>
                  <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={user.name}
                    name="name"
                />
                <br/>
                <label>Username</label><br/>
                   <input 
                    type="text" 
                    onChange={handleInputChange} 
                    name="username" 
                    value={user.username}
                />
                <br/>
                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForm
