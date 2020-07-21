import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {

    //useEffect to get the user to be edited
    useEffect(() => {
        setSelUser(props.userSelected)
    }, [props.userSelected])

    //setting the userSelected as props to the edit form input field values
    const [selUser, setSelUser] = useState(props.userSelected)

    //method for gathering the user input on the fields
    // snippet is nfn
    const handleInputChange = (event) => {
        // snippet is dob
        //get the input field values
        const {name,value} = event.target

        //set the values from input fields to user form above
        //[name] pertains to name property of the input field
        //value pertains to user input
        setSelUser({...selUser,[name]:value})
        
        //snippet is cl
        console.log(selUser);
        console.log(name);
        console.log(value);

    }

    return (
        <div>
            <h3>Edit User Form</h3>

            <form
                onSubmit={event => {
                //for the page not to refresh
                event.preventDefault()
                console.log(selUser.id);
                //invoking the editUser function that was from App.js as userEdit props
                props.userEdit(selUser.id, selUser)
                //clearing the input fields
                setSelUser({id:null,name:"",username:""})
                }}
            >
                <label>Name</label><br/>
                  <input 
                    type="text" 
                    onChange={handleInputChange} 
                    //  invoking the userSelected props to the edit form input field value
                    value={selUser.name}
                    name="name"
                />
                <br/>
                <label>Username</label><br/>
                   <input 
                    type="text" 
                    onChange={handleInputChange} 
                    name="username"
                    // invoking the userSelected props to the edit form input field value
                    value={selUser.username}
                />
                <br/>
                <button>Edit user</button>
            </form>
        
        </div>
    )
}

export default EditUserForm
