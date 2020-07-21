//rxconst
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';


//rxaction
export const addUser = (user) => {
    console.log("add action");
    return {
        type: ADD_USER,
        payload : user
    }
}   


export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload : id
    }
}

export const editUser = (user) => ({
    type: EDIT_USER,
    payload : user
})


