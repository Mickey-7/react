
//snippet : rxconst
export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const GET_USER = 'GET_USER'
export const EDIT_USER = 'EDIT_USER'

//the type and payload parameter below corresponds 
//to the type and payload from the reducer.js                                                                           

//snippet : rxaction
export const addUser = (user) => {
    console.log("add action");
    console.log(user);
    return {
        type: ADD_USER,
        payload: user 
    };
};


export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload :id
    }
}

export const editUser = (user) => ({
    type: EDIT_USER,
    payload : user
})



